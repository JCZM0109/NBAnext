'use client'

import { Heading, Text } from "@chakra-ui/react";
import { useRef, useState, useEffect} from "react";
import { useMotionValueEvent, useScroll, motion, animate } from "framer-motion";
import "./scroll-box.css";

export default function ScrollBox({delay, header}) {


    const exRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const { scrollYProgress } = useScroll({
        target: exRef,
        offset: ["0 1", "1.1 1"]
    })

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest)
        if (latest > .8) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    });


    return (<motion.div className="box-aboutme" initial={{
        opacity: 0
    }} animate={isVisible ? {
        opacity: 1,
        scale: [1.1, 1]
    } : {
        opacity: 0
    }} ref={exRef} transition={{duration: .5, delay: delay}}>
        <Heading className="header-boxscroll">{header}</Heading>
        <Text color="white"> What's up N! </Text>
    </motion.div>);
}