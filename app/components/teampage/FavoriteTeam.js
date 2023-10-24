'use client'
import { Box } from "@chakra-ui/react"
import Image from "next/image"
import crown from "@/public/crown.png"
import "./favorite-team.css"

 

export default function FavoriteTeam() {
    return (
        <Box className="box-image" >
            <Image src={crown} alt="crown image" className="image-fav" fill={true} sizes="(max-width: 1524px) 100vw, (max-width: 576px) 50vw"/>
        </Box>
    )
};