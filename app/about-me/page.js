'use client'

import { Container, Flex, Heading, Box, Text, Grid, GridItem } from "@chakra-ui/react";
import { delay, motion } from "framer-motion";
import "./page.css";

import ScrollBox from "../components/about-me/scrollBox";
import Image from "next/image";



export default function AboutMePage() {

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
                        {/* <Image src="/JCZM.jpg" fill="true" alt="Foto personal autor" className="img-jczm" /> */}
                    </Box>
                    <motion.div initial={{
                        opacity: 0
                    }} animate={{
                        opacity: 1,
                        scale: [1.1, 1]
                    }} transition={{delay: 2}} className="box-textam">

                    </motion.div>

                    <Grid className="grid-boxes">
                        <GridItem>
                            <ScrollBox delay={0} header={"Education"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox delay={.5} header={"Work experience"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox delay={0} header={"Pr"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox delay={.5} header={"Workexperience"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox delay={0} header={"Education"} />
                        </GridItem>
                        <GridItem>
                            <ScrollBox delay={.5} header={"Work experience"} />
                        </GridItem>
                    </Grid>
                </Flex>
            </Container>
        </>
    )
}