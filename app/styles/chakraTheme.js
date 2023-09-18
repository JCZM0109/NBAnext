import { defineStyleConfig, extendTheme } from "@chakra-ui/react";
import '@fontsource/rubik-mono-one';
import '@fontsource/staatliches'


const Heading = defineStyleConfig({
    baseStyle: {
        fontWeight: 'bold',
        color: 'white',
    },
    variants: {
        clear: {
            color: 'black'
        }
    }
})

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
    components: {
        Heading,
    },
});

export default theme;