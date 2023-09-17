'use client'
import { Button, Heading, Flex, Box, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useState } from "react";
import {signIn} from "next-auth/react";

 

export default function logInPage() {

    const router = useRouter(); //defino el router para redirección

    const [data, setData] = useState({
        email: "",
        password: "",
    });

    //el loggeo se hace con signIn de next-auth
    const loginUser = async(e) => {
        e.preventDefault();
        await signIn('credentials', {...data, redirect: false});
        router.push("/dashboard");
    };

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
            }} align="center" borderWidth="5px" borderColor="black" >Log In</Heading>
            <Box w="400px" h="120px" p="20px">
                <FormControl>
                    <form onSubmit={loginUser}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={data.email}
                            onChange={(e) => { setData({ ...data, email: e.target.value }) }}
                        />
                        <FormLabel>Password</FormLabel>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={data.password}
                            onChange={(e) => { setData({ ...data, password: e.target.value }) }}
                        />
                        <Box mt="10px">
                            <Button type="submit" _hover={{bg: "red.200"}}>Log in!</Button>
                        </Box>
                    </form>
                </FormControl>
            </Box>
        </Flex>
    )
};