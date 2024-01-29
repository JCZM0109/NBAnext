'use client'

import { Container, Flex, Heading, Box, Text, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import { delay, motion } from "framer-motion";
import "./page.css";

import ScrollBox from "../components/about-me/scrollBox";
import Image from "next/image";



export default function AboutMePage() {

    const [isMobile] = useMediaQuery('(min-width: 600px)');

    return (
        <>
            <Flex className="flex-headeram">
                <Heading className="header-headeram">About me</Heading>
                <Box className="box-textheader">
                    <Text className="text-headeram">This route is meant to show my personal information, thanks for passing by!</Text>
                </Box>
            </Flex>
            <Container>
                <Flex flexDir="column" alignItems="center">

                    <Box className="box-cvpic">
                        <Image src="/JCZM1.jpg" fill="true" alt="Foto personal autor" className="img-jczm" />
                    </Box>
                    <motion.div initial={{
                        opacity: 0
                    }} animate={{
                        opacity: 1,
                        scale: [1.1, 1]
                    }} transition={{ delay: 2 }} className="box-textam">
                        <Text className="text-am">
                            Electronic engineer guided to networks and
                            telecommunications. With knowledge and
                            experience on database management, web
                            development and technical support.
                            Proactive, responsible and with ease to
                            being a leader when needed to. I enjoy
                            teamwork and gaining knowledge in order
                            to face any situation.
                        </Text>
                    </motion.div>

                    <Grid className="grid-boxes">
                        <GridItem>
                            <ScrollBox header={"Education"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox delay={isMobile ? .5 : 0} header={"Work experience"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox header={"Pr"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox delay={isMobile ? .5 : 0} header={"Workexperience"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox header={"Education"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox delay={isMobile ? .5 : 0} header={"Work experience"} />
                        </GridItem>
                    </Grid>
                </Flex>
            </Container>
        </>
    )
}