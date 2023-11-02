'use client'

import { Container, Flex, Heading, Box, Text } from "@chakra-ui/react";
import "./page.css";

import ScrollBox from "../components/about-me/scrollBox";
import Image from "next/image";



export default function AboutMePage() {


    return (
        <>
            <Flex className="flex-headeram">
                <Heading className="header-headeram">About me</Heading>
                <Text className="text-headeram">This route is meant to show my personal information, thanks for passing by!</Text>
            </Flex>
            <Container>
                <Flex flexDir="column" alignItems="center">

                    <Box className="box-cvpic">
                        {/* <Image src="/JCZM.jpg" fill="true" alt="Foto personal autor" className="img-jczm" /> */}
                    </Box>
                    <Box className="box-aboutme" />
                    <ScrollBox />
                    <ScrollBox />
                    <ScrollBox />
                    <ScrollBox />
                    <ScrollBox />
                    <ScrollBox />
                </Flex>
            </Container>
        </>
    )
}