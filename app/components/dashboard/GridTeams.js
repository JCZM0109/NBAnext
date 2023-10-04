'use client'
import { Box, Grid, GridItem, Tab, Text } from "@chakra-ui/react"
import teamsByConf from "../../utilities/teamsByConf"
import "./grid-teams.css"
import Image from "next/image"
import Link from "next/link"
import { Slugify } from "@/app/utilities/slugify"


export default function GridTeams({ area }) {

    const { east, west } = teamsByConf;
    let teamList = [];

    if (area == "logo1") {
        teamList = west;
    } else {
        teamList = east;
    }


    return (
        <Box className="box-grid">
            <Grid className="grid-teams">
                {teamList.map((team, key) => {
                    return (
                        <>
                            <GridItem key={key}>
                                <Link href={`/teams/${Slugify(team)}`}>
                                    <Box className="box-imageteam">
                                        <Image fill={true} src={`/${team}.png`} alt={`${team} logo`} sizes="(max-width: 1524px) 100vw" className="image-team" />
                                    </Box>
                                </Link>
                            </GridItem>
                        </>
                    )
                })}
            </Grid>
        </Box>
    )
}