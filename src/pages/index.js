import Head from 'next/head';
import axios from 'axios';


import { AspectRatio, Box, Container, Flex, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { ConfeSelection } from '@/components/ConfeSelection'



export default function Home({teams}) {


  return (
    <>
      <Head>
        <title>NBA results</title>
        <meta name="description" content="NBA app using NextJS and ChakraUI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box bg="white" h="20px" w="100%"/>
        <Container maxW={{ base: "320px", md: "1100px" }} p="16px">
          <Flex p="20px" justifyContent="center" mt={{ base: "5px", lg: "15px" }} gap="20px">
            <Heading fontSize={{ base: '2xl', lg: '5xl' }} color="white">Welcome to JZ's corner</Heading>
          </Flex>
          <Flex justifyContent="space-around" alignItems="center" mt={{ base: "10px", lg: "20px" }}>
            <Text fontSize={{ base: 'sm', lg: '2xl' }} w={{ base: "200px", lg: "600px" }} p="10px" color="white" align={"justify"}>
              Welcome to my site! Made primarily to practice, not gonna lie. I will be getting data from a NBA API to show some of the teams' general info. Click any conference logo to select your team!
            </Text>
            <Box w={{ base: "80px", lg: "100px" }} h="auto">
              <AspectRatio ratio={9 / 16} position="relative">
                <Image src="/images/SVG-nba.svg" fill={true} style={{ objectFit: "contain" }} alt="NBA logo" />
              </AspectRatio>
            </Box>
          </Flex>
        </Container>
        <ConfeSelection teams={teams} />
      </main>
    </>
  )
}

/**
 * 
 * @returns Returns an object
 */
export const getServerSideProps = async(context) => {

    const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
    const teams = response.data.data;

    
    // const test = newData.data.map((team) => {
    //   return team.city
    // });
    // console.log(test);

    // console.log(teams);

    return {props: {
        teams
    }}

}
