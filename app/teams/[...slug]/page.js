'use client'
import { getData, getSpecificTeam } from "@/app/services"
import { Text, Box, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const teamsFullName = [
    "hawks",
    "celtics",
    "nets",
    "hornets",
    "bulls",
    "cavaliers",
    "mavericks",
    "nuggets",
    "pistons",
    "warriors",
    "rockets",
    "pacers",
    "clippers",
    "lakers",
    "grizzlies",
    "heat",
    "bucks",
    "timberwolves",
    "pelicans",
    "knicks",
    "city Thunder",
    "magic",
    "76ers",
    "suns",
    "trail-blazers",
    "kings",
    "spurs",
    "raptors",
    "jazz",
    "wizards",
];

export async function generateStaticParams() {

    try {
        const teams = await getData();
        const teamsList = teams.data;
        return teamsList.map((team) => ({
            slug: team.name.slug
        }))
    } catch (error) {
        console.log(error)
    }
}


export default function TeamPage({ params }) {
    const { slug } = params;


    const [teamInfo, setTeamInfo] = useState({});

    const fetchTeamData = async () => {
        const teamId = teamsFullName.indexOf(`${slug}`) + 1;
        const teamData = await getSpecificTeam(teamId);
        setTeamInfo(teamData)
    }

    useEffect(() => {
        fetchTeamData()
    }, []);

    return (
        <Box>
            <Heading size={"xl"} color="white">{teamInfo.name}</Heading>
            <Text color="white">{teamInfo.city}</Text>
            <Text color="white">{teamInfo.conference}</Text>
            <Text color="white">{teamInfo.full_name}</Text>
        </Box>
    )
}

