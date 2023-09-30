'use client'

import { Box, Heading, Text, Button, Center, Container, Grid, GridItem, Flex } from "@chakra-ui/react"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"
import "./dashboard.css"
import GridItemConfLogo from "../components/dashboard/GridItemConfLogo";





export default function dashboardPage() {

    const router = useRouter();

    const { data: session, status } = useSession();

    // if (!session) {
    //     return (
    //         <Center flexDir="column" mt="auto">
    //             <Heading>You're not authorized to access this page :c</Heading>
    //             <Link href={"/"}>Go back to homepage</Link>
    //         </Center>
    //     )
    // }

    const userName = session?.user?.name || "Guest";
    const userTeam = session?.user?.team || "";

    const handleSignOut = async () => {
        const { error } = await signOut({ redirect: false })

        if (error) {
            throw new Error("Can't log out")
        } else {
            router.push("/");
        }
    }


    return (
        <>
            <Container>
                <Grid className="grid-dashb">
                    <GridItem area={"header"}>
                        <Flex className="flex-gridheader">
                            <Box>
                                <Heading className="header-flex">Hey there, {userName}, happy to have you here!</Heading>
                                <Flex className="flex-userteamb">
                                    <Box>
                                        <Text className="text-userteamb">Click the logo to go to the {userTeam} page</Text>
                                    </Box>
                                    <Image width={150} height={150} src={`/${userTeam}.png`} alt={`${userTeam} logo`} />
                                </Flex>
                                <Box className="box-extratext">
                                    <Text className="extratext">Or... click a conference logo to select any team:</Text>
                                </Box>
                            </Box>
                            <Box>
                                <Button onClick={handleSignOut}>Sign Out</Button>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItemConfLogo area={"logo1"} />
                    <GridItemConfLogo area={"logo2"} />
                </Grid>
            </Container>
        </>
    )
};