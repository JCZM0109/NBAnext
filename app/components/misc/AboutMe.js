'use client'

import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import "./about-me.css";
import { useState } from "react";
import { duration } from "@mui/material";

export default function AboutMe({indi}) {


    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true)
    }

    return (
        <Flex className="flex-aboutm" position={indi ? "absolute" : "relative"} right={indi ? {lg: "50px", xl: "200px"} : "0px"} bottom={indi ? {lg: "50px", xl: "80px"} : "0px"}>
            <Flex className="flex-arrow">
                <Text className="aboutm-text">About me</Text>
                <motion.div
                    transition={{ duration: 1.5, repeat: Infinity }}
                    animate={{ y: [5, 10, 12, 10, 5] }}
                    className="box-imgarrow">
                    <Image src="/arrow.png" fill="true" alt="white arrow" sizes="(max-width: 576px) 50vw, (max-width: 1300px) 100vw" className="arrow-img" />
                </motion.div>
            </Flex>
            <Link href="/about-me">
                <motion.div
                    whileHover={{
                        scale: [1, 1.2, 1.3, 1.2],
                        rotate: "360deg",
                        transition: {
                            duration: .5
                        }
                    }} className="box-aboutm" onClick={handleClick}>
                    <Image src="/whirl.jpg" fill="true" alt="whirl image" sizes="(max-width: 576px) 50vw, (max-width: 1300px) 100vw" className="aboutm-image" />
                </motion.div>
            </Link>
        </Flex>
    );
}