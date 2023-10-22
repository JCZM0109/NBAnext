'use client'

import { Box, Container, Heading, Text, Flex, Button, AspectRatio } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import "./page.css"

/**
 * 
 * @returns (homepage)
 */

export default function Home() {


  return (
    //Basicamente se define un container para toda la pagina el cual tiene un flex vertical adentro. 
    <AnimatePresence>
      <Container centerContent className="homep-container">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="pageExit"
          variants={{
            hidden: {
              scale: .9,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              },
            },
            pageExit: {
              backgroundColor: "white",
              filter: "invert(1)",
              opacity: 0
            }
          }}

        >
          <Flex className="homep-flex">
            <Box>
              <Heading className="homep-header">
                Welcome to JZ's corner
              </Heading>

            </Box>
            <Box className="homep-textbox">

              <Text className="homep-textb">
                Welcome to my site! Made primarily to practice, not gonna lie. My name is Juan Camilo Zambrano Meza, I'm an Electronic Engineer guided to Networks and Telecommunications. I will be getting data from a NBA API to show some of the teams' general info. You will have to register and log in to access the website, and you can find more features within! Go on, select an option below:
              </Text>

            </Box>
            <motion.div whileHover={{
              scale: [1, 1.2, 1.3, 1.2],
              transition: {
                duration: .2
              },
              filter: "hue-rotate(90deg)"
            }} className="homep-buttonb">
              <Link href="/authentication/register">
                <Button size={{ base: "md", lg: "lg" }}>
                  Register
                </Button>
              </Link>
              <Link href="/authentication/login">
                <Button size={{ base: "md", lg: "lg" }}>
                  Login
                </Button>
              </Link>
            </motion.div>
          </Flex>
        </motion.div>
      </Container >
    </AnimatePresence>
  )
}
