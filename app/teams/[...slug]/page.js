'use client'
import { getAllPlayers, getData, getSpecificTeam, getTeamId } from "@/app/services"
import { Text, Box, Heading, Container, Flex, Button, FormLabel, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "./page.css"
import MatchesTable from "@/app/components/teampage/MatchesTable";
import FavoriteTeam from "@/app/components/teampage/FavoriteTeam";
import Link from "next/link";
import seasonsArray from "@/app/utilities/seasonsArray";

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
    "thunder",
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

const arraySeasons = seasonsArray();


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
    const { data: session, status } = useSession()
    const [teamInfo, setTeamInfo] = useState({});
    const [playersInfo, setPlayersInfo] = useState({});
    const [selectedSeason, setSelectedSeason] = useState("2022");
    const [temIdApi, setTemIdApi2] = useState(0)



    const teamId = teamsFullName.indexOf(`${slug}`) + 1;


    const fetchTeamData = async () => {
        const teamData = await getSpecificTeam(teamId);
        console.log(teamData.data)
        setTeamInfo(teamData.data)
    };

    const fetchPlayersInfo = async () => {
        
        const teamIdApi2 = await getTeamId(teamInfo.abbreviation);
        console.log(teamIdApi2)
        setTemIdApi2(teamIdApi2);

        const infoPlayers = await getAllPlayers(temIdApi, selectedSeason)

        setPlayersInfo(infoPlayers)

    };

    console.log(playersInfo)

    const handleSignOut = async () => {
        const { error } = await signOut({ redirect: false })

        if (error) {
            throw new Error("Can't log out")
        } else {
            router.push("/");
        }
    };

    useEffect(() => {
        fetchTeamData()
    }, []);

    useEffect(() => {
        fetchPlayersInfo()
    }, [teamInfo])


    useEffect(() => {
        fetchPlayersInfo()
    }, [selectedSeason])

    const userTeam = session?.user?.team || "";

    let isFavTeam = false;

    if (teamInfo.name === userTeam) {
        isFavTeam = true;
    };

    return (
        <>
            <Flex className="flex-header">
                <Flex alignItems="center">
                    <Link href="/dashboard"><Text>Go back</Text></Link>
                </Flex>
                <Flex className="flex-tname">
                    <Box padding="10px">
                        <Heading size={{ base: "lg", lg: "2xl" }} color="black">{teamInfo.name}</Heading>
                    </Box>
                    {/* {isFavTeam && <FavoriteTeam />} */}
                </Flex>
                <Box className="box-buttonso">
                    <Button size={{ base: "xs", sm: "sm", lg: "lg" }} onClick={handleSignOut}>Sign Out</Button>
                </Box>
            </Flex>
            <Container>
                <Box className="box-seasons">
                    <form>
                        <FormLabel>
                            Select a season to display data
                        </FormLabel>
                        <Select
                            placeholder="seasons"
                            value={selectedSeason}
                            id="season"
                            name="season"
                            type="number"
                            onChange={(e) => { setSelectedSeason(e.target.value) }}
                        >
                            {arraySeasons.map((season, key) => {
                                return <option key={key}>{season}</option>
                            })}
                        </Select>
                    </form>
                </Box>
                <MatchesTable teamId={temIdApi} season={selectedSeason} />
            </Container>
        </>
    )
}

