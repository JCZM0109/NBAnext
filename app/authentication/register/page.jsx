'use client'

import {
    Box,
    FormControl,
    Heading,
    FormLabel,
    Input,
    Select,
    Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./register.css"
import LoadingBar from "@/app/components/misc/LoadingBar";

const teamsFullName = [
    "Hawks",
    "Celtics",
    "Nets",
    "Hornets",
    "Bulls",
    "Cavaliers",
    "Mavericks",
    "Nuggets",
    "Pistons",
    "Warriors",
    "Rockets",
    "Pacers",
    "Clippers",
    "Lakers",
    "Grizzlies",
    "Heat",
    "Bucks",
    "Timberwolves",
    "Pelicans",
    "Knicks",
    "City Thunder",
    "Magic",
    "76ers",
    "Suns",
    "Trail-blazers",
    "Kings",
    "Spurs",
    "Raptors",
    "Jazz",
    "Wizards",
];



export default function RegisterPage() {


    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        team: "",

    });

    const registerUser = async (e) => {
        e.preventDefault()

        setIsLoading(true);
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
            <Box className="outer-box"
            >
                <Heading className="heading-regis"
                    variant="clear">Register</Heading>
            </Box>
            <FormControl className="div-formr">
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
                    <FormLabel className="label-form">Email</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={userData.email}
                        onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                    />
                    <FormLabel className="label-form">Password</FormLabel>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={userData.password}
                        onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
                    />
                    <FormLabel className="label-form">Team</FormLabel>
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
                    <Box className="box-buttonr">
                        <Button className="button-register" type="submit">Register</Button>
                    </Box>
                </form>
            </FormControl>
            {isLoading && <LoadingBar/>}
        </>
    )
};