'use client'
import { GridItem, Box, Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";
import "./GridItemConfLogo.css"
import BoxButtonConf from "./BoxButtonConf";



export default function GridItemConfLogo({ area }) {

    // const textHeading = (area == "logo1") ? "East" : "West";

    return (
        <GridItem area={area}>
            <Flex className="gitem-outerbox">
                <Box borderColor={(area == "logo1") ? "blue" : "red"} className="gitem-headerb">
                    <Heading textAlign="center" className="gitem-header">{(area == "logo1") ? "East" : "West"}</Heading>
                </Box>
                <BoxButtonConf area={area}></BoxButtonConf>
            </Flex>
        </GridItem>
    );
};