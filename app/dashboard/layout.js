'use client'
import { Container } from "@chakra-ui/react";
import './dashboard.css'

export default function authPagesLayout({ children }) {
    return (
        <Container className="main-layout">
                {children}
        </Container>
    )
}