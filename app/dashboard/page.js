'use client'

import { Box, Heading, Text, Button, Center, Container, Grid, GridItem, Flex } from "@chakra-ui/react"
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"

export default function dashboardPage() {

    const router = useRouter();

    const { data: session, status } = useSession();

    console.log(session);

    if (!session) {
        return (
            <Center flexDir="column" mt="auto">
                <Heading>You're not authorized to access this page :c</Heading>
                <Link href={"/"}>Go back to homepage</Link>
            </Center>
        )
    }

    const userName = session?.user?.name || "Guest";
    const userTeam = session?.user?.team || "";

    const handleSignOut = async () => {
        await signOut({ callbackUrl: 'http://localhost:3000/' })
    }


    return (
        <>
            <Container>
                <Grid templateAreas={`"header header"
                              "logo1 logo2"`}
                    gridTemplateRows={"300px 1fr"}
                    gridTemplateColumns={"1fr 1fr"}
                    gap="50px">
                    <GridItem area={"header"}>
                        <Flex gap="50px" justifyContent="space-between" alignItems="center" borderWidth="5px" borderColor="white" p="20px">
                            <Box>
                                <Heading size="lg">Hey there, {userName}, happy to have you here!</Heading>
                                <Box>
                                    <Text color="white">Click the logo to go to the {userTeam} page</Text>
                                    <Box>
                                        <Image width={100} height={100} src="/west/warriors.png"/>
                                    </Box>
                                </Box>
                                <Text color="white">Or... click a conference logo to select any team:</Text>
                            </Box>
                            <Box>
                                <Button onClick={handleSignOut}>Sign Out</Button>
                            </Box>
                        </Flex>
                    </GridItem>
                    <GridItem area={"logo1"}>
                        <Box maxW="400px" maxH="400px" mx="auto">
                            <Box borderWidth="5px" borderColor="blue" mx="auto" borderRadius="50% 20% / 10% 40%;" padding="5px" maxW="200px">
                                <Heading color="white" textAlign="center">East</Heading>
                            </Box>
                            <Box width={300} height={300} mx="auto" position="relative" mt="20px">
                                <Image fill="true" objectFit="contain" alt="Conference" src="/east/EAST.svg" />
                            </Box>
                        </Box>
                    </GridItem>
                    <GridItem area={"logo2"}>
                        <Box maxW="400px" maxH="400px" mx="auto">
                            <Box borderWidth="5px" borderColor="red" mx="auto" borderRadius="50% 20% / 10% 40%;" padding="5px" maxW="200px">
                                <Heading color="white" textAlign="center">West</Heading>
                            </Box>
                            <Box width={300} height={300} mx="auto" position="relative" mt="20px">
                                <Image fill="true" objectFit="contain" alt="Conference" src="/west/WEST.svg" />
                            </Box>
                        </Box>
                    </GridItem>
                </Grid>
            </Container>
        </>
    )
};