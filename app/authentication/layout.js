'use client'
import { Container, Flex, Box, Text } from "@chakra-ui/react";
import './layout.css'
import Link from "next/link";

export default function authPagesLayout({ children }) {
    return (
        <Container className="container-auth">
            <Flex className="flex-authlayout">
                {children}
            </Flex>
            <Box className="box-linkhome">
                <Link href="/">
                    <Text className="link-home">Go back to home page</Text>
                </Link>
            </Box>
        </Container>
    )
}