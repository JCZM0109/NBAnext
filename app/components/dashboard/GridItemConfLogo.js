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
                <Box borderColor={(area == "logo1") ? "rgba(237, 23, 75, 1)" : "rgba(9, 82, 156, 1)"} className="gitem-headerb">
                    <Heading textAlign="center" className="gitem-header">{(area == "logo1") ? "West" : "East"}</Heading>
                </Box>
                <BoxButtonConf area={area}></BoxButtonConf>
            </Flex>
        </GridItem>
    );
};