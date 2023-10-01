import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import "./boxbutton-conf.css"


export default function BoxButtonConf({ area }) {
    return (
        <Box as="button" className="gitem-imageb">
                <Image fill="true" alt="Conference" className="gitem-image" src={area == "logo1" ? "/EAST.svg" : "/WEST.svg"} />
        </Box>
    );
}