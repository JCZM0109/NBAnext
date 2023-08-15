import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";


export default async (req, res) => {

    const session = await getServerSession(req, res, authOptions);


    if (session) {
        res.send({
            content:
            "This is protected content. You can access this content due to your sign in.",
        })
    } else {
        res.send({
            error: "You must be signed in to view this page's content.",
        })
    }

}