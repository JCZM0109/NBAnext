'use client'

import { Box, Heading, Text } from "@chakra-ui/react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"

export default function dashboardPage() {

    const router = useRouter();

    const {data: session, status, update} = useSession();

    console.log(session);

    const userName = session?.user?.name || "Guest";
    const userTeam = session?.user?.team || "";


    return(
        <Box>
            <Heading>Hey there, {userName}</Heading>
            <Text>Happy to have you here, you selected {userTeam} as your favorite team</Text>
        </Box>
    )
};