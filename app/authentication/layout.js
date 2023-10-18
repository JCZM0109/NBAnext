'use client'
import { Container, Flex, Box, Text } from "@chakra-ui/react";
import './layout.css'
import Link from "next/link";
import { motion } from "framer-motion";


export default function authPagesLayout({ children }) {
    return (
        <motion.div initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1
            }
        }}> 
        <Container className="container-auth">
            <Flex className="flex-authlayout">
                {children}
            </Flex>
            <motion.div className="box-linkhome" whileHover={{
                scale: 1.2,
                transition: {
                    duration: .2
                }
            }}>
                <Link href="/">
                    <Text className="link-home">Go back to home page</Text>
                </Link>
            </motion.div>
        </Container>
        </motion.div>
    )
}