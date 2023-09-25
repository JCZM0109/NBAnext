'use client'

import { Box, Container, Heading, Text, Flex, Button } from "@chakra-ui/react"
import Link from "next/link"



export default function Home() {


  return (
    <Container size="xl" centerContent>
      <Box mt="50px" p="15px" maxH="auto" maxW="auto" alignSelf="center">
        <Heading size="3xl" whiteSpace="nowrap">
          Welcome to JZ's corner
        </Heading>
        <Box w={500} margin="auto">
          <Text color="white" marginTop="150px" fontSize="xl">
            Welcome to my site! Made primarily to practice, not gonna lie. My name is Juan Camilo Zambrano Meza, I'm an Electronic Engineer guided to Networks and Telecommunications. I will be getting data from a NBA API to show some of the teams' general info. You will have to register and log in to access the website, and you can find more features within! Go on, select an option below:
          </Text>
        </Box>
        <Box as={Flex} marginX="auto" mt="70px" maxW={200} justifyContent="space-between">
          <Link href="/authentication/register">
            <Button>
              Register
            </Button>
          </Link>
          <Link href="/authentication/login">
            <Button>
              Login
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  )
}
