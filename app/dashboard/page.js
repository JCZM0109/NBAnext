'use client'

import { Box, Heading, Text, Button } from "@chakra-ui/react"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function dashboardPage() {

    const router = useRouter();

    const {data: session, status} = useSession();

    console.log(session);

    if (!session) {
        return(
                <Box>
                    <Heading>You're not authorized to access this page :c</Heading>
                    <Link href={"/"}>Go back to homepage</Link>
                </Box>
            )
    }

    const userName = session?.user?.name || "Guest";
    const userTeam = session?.user?.team || "";

    const handleSignOut = async() => {
        await signOut({ callbackUrl: 'http://localhost:3000/' }) 
    }


    return(
        <Box>
            <Heading>Hey there, {userName}</Heading>
            <Text>Happy to have you here, you selected {userTeam} as your favorite team</Text>
            <Button onClick={handleSignOut}>Sign Out</Button>
        </Box>
    )
};