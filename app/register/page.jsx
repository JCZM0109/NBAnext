'use client'
import {
    Box,
    Flex,
    FormControl,
    Heading,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select,
    Button
} from "@chakra-ui/react";
import axios from "axios";
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

    const registerUser = async (e) => {
        e.preventDefault()

        const serializedUserData = JSON.stringify({userData});
        console.log(serializedUserData); 
        const response = await axios.post('/api/register', 
        serializedUserData,
        {
            headers: {
              "Content-Type": "application/json",
            },
        });
        console.log(response);
        
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
            }} align="center" borderWidth="5px" borderColor="black" >Register</Heading>
            <Box w="400px" h="120px">
                <FormControl>
                    <form onSubmit={registerUser}>
                        <FormLabel>Name</FormLabel>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={userData.name}
                            onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }}
                        />
                        <FormLabel>Email</FormLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            value={userData.email}
                            onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                        />
                        <FormLabel>Password</FormLabel>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={userData.password}
                            onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
                        />
                        <FormLabel>Team</FormLabel>
                        <Select
                            placeholder="Select your favorite team"
                            value={userData.team}
                            id="team"
                            name="team"
                            type="text"
                            onChange={(e) => { setUserData({ ...userData, team: e.target.value }) }}
                        >
                            <option>Chicago Bulls</option>
                            <option>Papa Jordan</option>
                            <option>Shaquille "Big Shaq" O'Neal</option>
                        </Select>
                        <Box mt="10px">
                            <Button type="submit">Register</Button>
                        </Box>
                    </form>
                </FormControl>
            </Box>
        </Flex>
    )
};