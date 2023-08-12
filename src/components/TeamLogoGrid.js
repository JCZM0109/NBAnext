import { Flex, SimpleGrid, AspectRatio } from "@chakra-ui/react";
import Image from "next/image";
import { Slugify } from "@/utilities/slugify";

import Link from "next/link";

export function TeamLogoGrid({ choice, teams }) { //DEESTRUCTURAAAR PARCERO (funciones reciben props, objeto): recordar que si se ponen los dos corchetes estamos haciendo referencia a la variable, si lo pasara sin llaves JS cree que es un objeto llamado choice, no la variable a usar


    const westConf = teams.filter((team) => {
        if (team.conference === "West") {
            return team
        }
    });

    const eastConf = teams.filter((team) => {
        if (team.conference === "East") {
            return team
        }
    });

    const teamsByConf = (choice) ? eastConf : westConf;


    return (
        <Flex mt="40px" justifyContent="center" p={15}>
            <SimpleGrid templateColumns={'1fr 1fr 1fr'} templateRows={"1fr"} gap="10px">
                {
                    teamsByConf.map((team, i) => {
                        return (
                            <Link href={`/teams/${team.id}`} key={i}>
                                <AspectRatio position={"relative"} width={150} ratio={1} p="5px">
                                    <Image alt={`${team} logo`} fill={true} style={{
                                        objectFit: "contain"
                                    }} src={`/images/${(choice) ? "east" : "west"}/${Slugify(team.name)}.png`} />
                                </AspectRatio>
                            </Link>
                        )
                    })
                }
            </SimpleGrid>
        </Flex>
    );
}