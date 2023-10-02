import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Heading } from "@chakra-ui/react";
import Image from "next/image";
import "./boxbutton-conf.css"
import { useState } from "react";


export default function BoxButtonConf({ area }) {

    const [ isOpen, setIsOpen ] = useState(false);
    const onOpen = () => {
        setIsOpen(true)
    };
    const onClose = () => {
        setIsOpen(false)
    };

    return (
        <>
            <Box as="button" className="gitem-imageb" bgColor={(area == "logo1") ? "rgba(9, 82, 156, 1)" : "rgba(237, 23, 75, 1)"} onClick={onOpen}>
                <Image fill="true" alt="Conference" className="gitem-image" src={area == "logo1" ? "/EAST.svg" : "/WEST.svg"} />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement={(area == "logo1") ? "left" : "right"}
                onClose={onClose}
                size={{base: "xs", lg: "lg"}}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Box width={200} h={200}>
                                <Heading color="black">{area == "logo1" ? "East" : "West"}</Heading>
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}