import { extendTheme } from "@chakra-ui/react";
import '@fontsource/rubik-mono-one';
import '@fontsource/staatliches'


const theme = extendTheme({
    fonts: {
        heading: `'Rubik Mono One',sans-serif`,
        body: `'Staatliches', sans-serif`,
    },
    components: {
        Container: {
            sizes: {
                xl: {
                    maxW: "1200px",
                },
            },
        },
    },
});

export default theme;