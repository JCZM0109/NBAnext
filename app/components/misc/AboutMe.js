'use client'

import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import "./about-me.css";

export default function AboutMe() {


    return (
        <Flex className="flex-aboutm">
            <Flex className="flex-arrow">
            <Text className="aboutm-text">About me</Text>
            <motion.div 
            transition={{duration: 1.5, repeat: Infinity}} 
            animate={{y: [5, 12, 5]}}
                className="box-imgarrow">
                <Image src="/arrow.png" fill="true" alt="white arrow" className="arrow-img" />
            </motion.div>
            </Flex>
            <motion.div whileHover={{
                scale: [1, 1.2, 1.3, 1.2],
                rotate: "360deg",
                transition: {
                    duration: .2
                }
            }} className="box-aboutm">
                <Link href="/about-me">
                    <Image src="/whirl.jpg" fill="true" alt="whirl image" className="aboutm-image" />
                </Link>
            </motion.div>
        </Flex>
    );
}