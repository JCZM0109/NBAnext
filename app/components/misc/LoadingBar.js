'use client'

import { Box, Flex, Progress, Text } from "@chakra-ui/react"

export default function LoadingBar() {

    return (
        <Flex mt="20px" flexDir="column" gap="5px">
            <Progress size="xs" colorScheme="black" isIndeterminate />
            <Box>
                <Text>Loading</Text>
            </Box>
        </Flex>
    )

};