'use client'
import { Box } from "@chakra-ui/react"
import Image from "next/image"
import crown from "@/public/crown.png"

 

export default function FavoriteTeam() {
    return (
        <Box position="relative" width="80px" height="auto" >
            <Image src={crown} alt="crown image" fill={true} objectFit="contain"/>
        </Box>
    )
};