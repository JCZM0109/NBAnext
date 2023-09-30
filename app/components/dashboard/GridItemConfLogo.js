'use client'
import { GridItem, Box, Heading } from "@chakra-ui/react";
import Image from "next/image";
import "./GridItemConfLogo.css"


export default function GridItemConfLogo({area}) {

    // const textHeading = (area == "logo1") ? "East" : "West";

    return (<GridItem area={area}>
        <Box className="gitem-outerbox">
            <Box borderColor={(area == "logo1") ? "blue" : "red"} className="gitem-headerb">
                <Heading textAlign="center" className="gitem-header">{(area == "logo1") ? "East" : "West"}</Heading>
            </Box>
            <Box className="gitem-imageb">
                <Image fill="true" alt="Conference" className="gitem-image" src={(area == "logo1") ? "/EAST.svg" : "/WEST.svg"} />
            </Box>
        </Box>
    </GridItem>);
};