'use client'
import { Box } from "@chakra-ui/react"
import Image from "next/image"
import crown from "@/public/crown.png"
import "./favorite-team.css"

 

export default function FavoriteTeam() {
    return (
        <Box className="box-image" >
            <Image src={crown} alt="crown image" className="image-fav" fill={true}/>
        </Box>
    )
};