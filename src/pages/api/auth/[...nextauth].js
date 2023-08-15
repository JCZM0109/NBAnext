import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {

    providers: [
        CredentialsProvider({
            // The name to display on the sign-in form (e.g. "Sign in with...")
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {

                if (credentials.username === "test" && credentials.password === "12345") {
                    const user = {id: 1, username: "test"}
                    console.log(user);
                    return user;
                }
                return Promise.resolve(null);
            },
        }),
    ],

    session: {
        jwt: true,
    },

    callbacks: {

        async jwt(token, user) {
            console.log('Token before modification:', token);
            if (user) {
                token.id = user.id;
                token.username = user.username;
            }
            console.log('Token after modification:', token);

            return token;
        },
        
        async session(session, token) {
            
            console.log('Session before modification:', session);
            console.log('Token after modification:', token);

            session.user = {
                    id: token.id,
                    username: token.username,
                };
            console.log('Session after modification:', session);


            return session;
        },
    },
};

export default NextAuth(authOptions);