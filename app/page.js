'use client'

import { Box, Container, Heading, Text, Flex, Button, AspectRatio } from "@chakra-ui/react"
import Image from "next/image"
import Link from "next/link"
import "./page.css"

/**
 * 
 * @returns (homepage)
 */

export default function Home() {


  return (
    //Basicamente se define un container para toda la pagina el cual tiene un flex vertical adentro. 
    <Container centerContent className="homep-container">
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
        <Box className="homep-buttonb">
          <Link href="/authentication/register">
            <Button size={{base: "md", lg: "lg"}}>
              Register
            </Button>
          </Link>
          <Link href="/authentication/login">
            <Button size={{base: "md", lg: "lg"}}>
              Login
            </Button>
          </Link>
        </Box>
      </Flex>
    </Container>
  )
}
