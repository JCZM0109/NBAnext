import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient(); //Initialize prisma client.


export const authOptions = {

    adapter: PrismaAdapter(prisma),
    providers: [

        CredentialsProvider({

            name: "credentials",
            credentials: {
                username: {label: "Username", type: "text", placeholder: "jsmith"},
                password: {label: "Password", type: "password"},
                email: {label: "Email", type: "email"}
            },

            async authorize(credentials) { //Here's all the logic for autorizing users

                //check to see if email and password are valid
                if (!credentials.email || !credentials.password) {
                    return null;
                };

                //check if user exists (findUnique from PRISMA)
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if (!user) {
                    return null;
                };

                //check if passwords match (bcrypt's compare function, since we hashed it)
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword);

                if(!passwordMatch) {
                    return null;
                }

                //return user if everything is valid.

                return user;

            }
        })
    ],

    callbacks: {
        async jwt({token, user, session}) {
            console.log("jwt callback", {token, user, session});

            //pass in user ID and address to token,
            if (user) {
                return {
                    ...token, 
                    id: user.id,
                    address: user.address,
                };
            }
            return token;
        },

        async session ({session, token, user}) {
            console.log("session callback", {session, token, user});

            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    address: token.address,
                }
            };

        },
    },

    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};