'use client'
import { getData, getTeamList } from "@/app/services";
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
    Button,
    Center
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const teamsFullName = [
    "Atlanta Hawks",
    "Boston Celtics",
    "Brooklyn Nets",
    "Charlotte Hornets",
    "Chicago Bulls",
    "Cleveland Cavaliers",
    "Dallas Mavericks",
    "Denver Nuggets",
    "Detroit Pistons",
    "Golden State Warriors",
    "Houston Rockets",
    "Indiana Pacers",
    "Los Angeles Clippers",
    "Los Angeles Lakers",
    "Memphis Grizzlies",
    "Miami Heat",
    "Milwaukee Bucks",
    "Minnesota Timberwolves",
    "New Orleans Pelicans",
    "New York Knicks",
    "Oklahoma City Thunder",
    "Orlando Magic",
    "Philadelphia 76ers",
    "Phoenix Suns",
    "Portland Trail Blazers",
    "Sacramento Kings",
    "San Antonio Spurs",
    "Toronto Raptors",
    "Utah Jazz",
    "Washington Wizards",
];



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

        const serializedUserData = JSON.stringify({ userData });
        console.log(serializedUserData);
        const response = await axios.post('/api/register',
            serializedUserData,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        console.log(response);
        router.push("/authentication/login")
    };

    return (
        <>
            <Box borderWidth="5px"
                borderColor="black"
            >
                <Heading size={{
                    base: "md",
                    lg: "2xl"
                }} align="center"
                    variant="clear">Register</Heading>
            </Box>
            <FormControl mt="20px">
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
                    <FormLabel mt="10px">Email</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={userData.email}
                        onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                    />
                    <FormLabel mt="10px">Password</FormLabel>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={userData.password}
                        onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
                    />
                    <FormLabel mt="10px">Team</FormLabel>
                    <Select
                        placeholder="Select your favorite team"
                        value={userData.team}
                        id="team"
                        name="team"
                        type="text"
                        onChange={(e) => { setUserData({ ...userData, team: e.target.value }) }}
                    >
                        {
                            teamsFullName.map((team, key) => {
                                return <option key={key}>{team}</option>
                            })
                        }
                    </Select>
                    <Box mt="10px">
                        <Button type="submit">Register</Button>
                    </Box>
                </form>
            </FormControl>
        </>
    )
};