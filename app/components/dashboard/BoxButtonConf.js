import { Box, Flex, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import "./boxbutton-conf.css"
import { useState } from "react";
import GridTeams from "./GridTeams";


export default function BoxButtonConf({ area }) {

    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => {
        setIsOpen(true)
    };
    const onClose = () => {
        setIsOpen(false)
    };

    return (
        <>
            <Box as="button" className="gitem-imageb" bgColor={(area == "logo1") ? "rgba(237, 23, 75, 1)" : "rgba(9, 82, 156, 1)"} onClick={onOpen}>
                <Image fill="true" alt="Conference" className="gitem-image" src={area == "logo1" ? "/WEST.svg" : "/EAST.svg"} />
            </Box>
            <Drawer
                isOpen={isOpen}
                placement={(area == "logo1") ? "left" : "right"}
                onClose={onClose}
                size={{ base: "xs", lg: "md" }}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Flex className="drawer-flex">
                                <Box className="box-headerdrawer">
                                    <Heading color={(area == "logo1") ? "rgba(237, 23, 75, 1)" : "rgba(9, 82, 156, 1)"}>{area == "logo1" ? "West" : "East"}</Heading>
                                </Box>
                                <GridTeams area={area}/>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}