'use client'
import { Container } from "@chakra-ui/react";

export default function authPagesLayout({ children }) {
    return (
        <Container maxW="full" height="100vh" bgColor="black" pt="100px">
                {children}
        </Container>
    )
}