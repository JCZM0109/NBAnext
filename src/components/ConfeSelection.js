import { Box, Heading, Container, Grid, GridItem } from "@chakra-ui/react";
import { ConfeButton } from "./ConfeButton";

/**
 * 
 * @param {Array<Object>} param0 
 * @returns 
 */

export function ConfeSelection({teams}) {

    return (
        <Container maxW={{
            base: "370px",
            md: "1300px"
        }} p="10px">
            <Grid mt={{
                base: "25px",
                lg: "50px"
            }} templateAreas={`"head1 head2"
                                "logo1 logo2"`}
                gridTemplateColumns='1fr 1fr'
                gridTemplateRows="50px 1fr"
                justifyItems="center"
                alignItems="center"
                rowGap="25px">
                <GridItem area={'head1'}>
                    <Box borderWidth="5px" borderColor="blue" borderRadius="50% 20% / 10% 40%;" padding="5px">
                        <Heading color="white">East</Heading>
                    </Box>
                </GridItem>
                <GridItem area={'head2'}>
                    <Box borderWidth="5px" borderColor="red" borderRadius="50% 20% / 10% 40%;" padding="5px">
                        <Heading color="white">West</Heading>
                    </Box>
                </GridItem>
                <GridItem area={'logo1'}>
                    <ConfeButton indi={true} teams={teams}></ConfeButton>
                </GridItem>
                <GridItem area={'logo2'}>
                    <ConfeButton indi={false} teams={teams}></ConfeButton>
                </GridItem>
            </Grid>
        </Container>
    );
};