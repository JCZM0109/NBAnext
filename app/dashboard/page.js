'use client'

import { Box, Heading, Text, Button, Center, Container, Grid, GridItem, Flex } from "@chakra-ui/react"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"
import "./dashboard.css"
import GridItemConfLogo from "../components/dashboard/GridItemConfLogo";
import { Slugify } from "../utilities/slugify";
import { AnimatePresence, motion } from "framer-motion";




export default function dashboardPage() {

    const router = useRouter();

    const { data: session, status } = useSession();

    if (!session) {
        return (
            <Center flexDir="column" gap="20px">
                <Heading>You're not authorized to access this page :c</Heading>
                <Link href={"/"}><Text color="white">Go back to homepage</Text></Link>
            </Center>
        )
    }

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
            <Container className="main-layout">
                <Grid className="grid-dashb">
                    <GridItem area={"header"} className="flex-gridheader">
                        <Heading className="header-flex">Hey there, {userName}, happy to have you here!</Heading>
                        <Flex className="flex-userteamb">
                            <Box>
                                <Text className="text-userteamb">Click the logo below to go to the {userTeam} page:</Text>
                            </Box>
                            <Link href={`/teams/${Slugify(userTeam)}`}>
                                <motion.div whileHover={{
                                    zIndex: 1,
                                    scale: [1, 1.2, 1.1],
                                    rotate: [0, 10, -10, 0],
                                    transition: {
                                        duration: .2
                                    }
                                }} className="flex-boximg">
                                    <Image fill="true" sizes="(max-width: 1524px) 100vw" src={`/${userTeam}.png`} alt={`${userTeam} logo`} className="img-userteam" />
                                </motion.div>
                            </Link>
                        </Flex>
                        <Box className="box-extratext">
                            <Text className="extratext">Or... click a conference logo to select any team:</Text>
                        </Box>
                    </GridItem>
                    <GridItem area={"sout"} className="gitem-buttonso">
                        <Box>
                            <Button size={{ base: "xs", sm: "sm", lg: "lg" }} onClick={handleSignOut}>Sign Out</Button>
                        </Box>
                    </GridItem>
                    <GridItemConfLogo area={"logo1"} />
                    <GridItemConfLogo area={"logo2"} />
                </Grid>
            </Container>
        </>
    )
};