import NextAuth from "next-auth/next";
import Providers from "next-auth/providers";


export const authOptions = {

    providers: [
        Providers.Credentials({
            // The name to display on the sign-in form (e.g. "Sign in with...")
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            authorize: async (credentials) => {

                if (credentials.username === "MadDog" && credentials.password === "12345") {

                    return { id: 1, username: "MadDog" };
                }

                return null;
            },
        }),
    ],

    session: {
        jwt: true,
    },

    callbacks: {

        async jwt(token, user) {
            if (user) {
                token.id = user.id;
                token.username = user.username;
            }

            return token;
        },

        async session(session, token) {
            session.user = token;
            return session;
        },
    },
};

export default NextAuth(authOptions);