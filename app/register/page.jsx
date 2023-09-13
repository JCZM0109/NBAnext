'use client'
import { Box, Flex, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


 

export default function RegisterPage() {

    const router = useRouter();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        team: "",

    });



    return (
        <Flex height={{
            base: "200px",
            lg: "600px"
        }} width={{
            base: "200px",
            lg: "700px"
        }} bgColor="white" mx="auto" mt="100px" position="relative" flexDir="column">
            <Heading size={{
                base: "md",
                lg: "2xl"
            }} align="center" borderWidth="5px" borderColor="black" >Register</Heading>
        </Flex>
    )
};