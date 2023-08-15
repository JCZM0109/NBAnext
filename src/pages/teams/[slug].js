import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import axios from "axios";
import { Slugify } from "@/utilities/slugify";



export default function TeamPage({team}) {

    return (
        <>
        <Heading>{team.full_name}</Heading>
        <Image width={100} height={100} alt={`${team.full_name} logo`} src={`/images/${team.conference}/${Slugify(team.name)}.png`} ></Image>
        <Text>{team.city}</Text>
        <Text>{team.conference}</Text>
        <Text>{team.abbreviation}</Text>
        </>
    )

};

export const getStaticPaths = async() => {


        const response = await axios.get("https://www.balldontlie.io/api/v1/teams");
        const teams = response.data;
        const slugs = teams.data.map((team) => {
            return `${team.id}`;
        })

        return {
            paths: slugs.map((slug) => ({params: {slug}})),
            fallback: false,
        };

};

export const getStaticProps = async(context) => {

    const id = parseInt(context.params.slug);

    const teams = await axios.get("https://www.balldontlie.io/api/v1/teams");
    const teamData = teams.data;

    const team = teamData.data.find((team2) => {
        return team2.id === id;
    });

    return {
        props: {
            team,
    }}

}