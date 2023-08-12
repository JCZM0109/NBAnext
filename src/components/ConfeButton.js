import { Box, Heading, Flex, Divider, Center } from "@chakra-ui/react";
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody } from "@chakra-ui/react";
import Image from "next/image";


import { TeamLogoGrid } from "./TeamLogoGrid";
import { useState } from "react"






export const ConfeButton = ({ indi, teams }) => {

    const indicator = indi;
    const [isOpen, setIsOpen] = useState(false);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);

    const drawerhcolor = (indicator) ? "rgba(9, 82, 156, 1)" : "rgba(237, 23, 75, 1)";

    return (
        <>
            <Box as="button" onClick={onOpen}>
                {/* <Image src={indi ? eastlogo : westlogo} /> */}
                <Image width={400} height={400} alt="Conference" src={(indicator) ? "/images/east/EAST.svg" : "/images/west/WEST.svg"} />
            </Box>
            <Drawer isOpen={isOpen} onClose={onClose} placement={indicator ? "left" : "right"} size="lg">
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Flex justifyContent="center" mt="50px">
                                <Heading fontSize="3xl" color={drawerhcolor}>
                                    {indicator ? "Eastern Conference" : "Western Conference"}
                                </Heading>
                            </Flex>
                            <Center>
                                <Divider mt="15px" borderWidth="5px" w="450px" borderColor={drawerhcolor} />
                            </Center>
                            <TeamLogoGrid choice={indicator} teams={teams}/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}