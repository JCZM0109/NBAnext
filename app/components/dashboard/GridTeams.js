'use client'
import { Box, Grid, GridItem } from "@chakra-ui/react"
import teamsByConf from "../../utilities/teamsByConf"
import "./grid-teams.css"
import Image from "next/image"
import Link from "next/link"
import { Slugify } from "@/app/utilities/slugify"
import { motion } from "framer-motion"


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
                        <GridItem key={key}>
                            <Link href={`/teams/${Slugify(team)}`}>
                                <motion.div className="box-imageteam" whileHover={{
                                    zIndex: 1,
                                    scale: [1, 1.3, 1.1],
                                    rotate: [0, 10, -10, 0],
                                    transition: {
                                        duration: .2
                                    }                      
                                    }}>
                                    <Image fill={true} src={`/${team}.png`} alt={`${team} logo`} sizes="(max-width: 1524px) 100vw" className="image-team"/>
                                </motion.div>
                            </Link>
                        </GridItem>
                    )
                })}
            </Grid>
        </Box>
    )
}