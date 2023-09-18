'use client'

import { Box, Heading, Text, Button } from "@chakra-ui/react"
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export default function dashboardPage() {

    const router = useRouter();

    const {data: session, status, update} = useSession();

    console.log(session);

    const userName = session?.user?.name || "Guest";
    const userTeam = session?.user?.team || "";

    const handleSignOut = async() => {
        await signOut({ callbackUrl: 'http://localhost:3000/' }) 
        console.log(session);
    }


    return(
        <Box>
            <Heading>Hey there, {userName}</Heading>
            <Text>Happy to have you here, you selected {userTeam} as your favorite team</Text>
            <Button onClick={handleSignOut}>Sign Out</Button>
        </Box>
    )
};