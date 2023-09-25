'use client'
import { Container, Flex } from "@chakra-ui/react";

export default function authPagesLayout({ children }) {
    return (
        <Container maxW="full" height="100vh" bgColor="azure" pt="100px">
            <Flex height={{
                base: "auto",
                md: "auto"
            }} width={{
                base: "300px",
                md: "700px"
            }} mx="auto" mt="100px" flexDir="column" borderWidth="5px" borderColor="black" p={{ base: "15px", lg: "40px" }}>
                {children}
            </Flex>
        </Container>
    )
}