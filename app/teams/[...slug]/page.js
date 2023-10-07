'use client'
import { getData, getSpecificTeam } from "@/app/services"
import { Text, Box, Heading, Container, Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./page.css"

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

    const router = useRouter();

    const {data: session, status} = useSession()


    const [teamInfo, setTeamInfo] = useState({});

    const fetchTeamData = async () => {
        const teamId = teamsFullName.indexOf(`${slug}`) + 1;
        const teamData = await getSpecificTeam(teamId);
        setTeamInfo(teamData)
    }

    const handleSignOut = async () => {
        const { error } = await signOut({ redirect: false })

        if (error) {
            throw new Error("Can't log out")
        } else {
            router.push("/");
        }
    }

    useEffect(() => {
        fetchTeamData()
    }, []);

    const userName = session?.user?.name || "Guest";
    const userTeam = session?.user?.team || "";

    let isFavTeam = false;

    if (teamInfo.name === userTeam) {
        isFavTeam = true;
        console.log(isFavTeam);
    };

    return (
        <>
            <Flex width="100%" height="70px" p="5px" bgColor="white" justifyContent="space-around">
                <Box padding="10px">
                    <Heading size={"2xl"} color="black">{teamInfo.name}</Heading>
                </Box>
                <Box className="box-buttonso">
                    <Button size={{ base: "xs", sm: "sm", lg: "lg" }} onClick={handleSignOut}>Sign Out</Button>
                </Box>
            </Flex>
            <Container>
                <Text color="white">{teamInfo.city}</Text>
                <Text color="white">{teamInfo.conference}</Text>
                <Text color="white">{teamInfo.full_name}</Text>
            </Container>
        </>
    )
}

