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
        Heading,
        Container: {
            baseStyle: {
                maxW: "1400px"
            },
            sizes: {
                sm: {
                    maxW: "370px"
                }
            }
        },
        Drawer: {
            parts: ['dialog', 'header', 'body'],
            variants: {
                primary: {
                    dialog: {
                        maxW: "520px"
                    },
                },
                secondary: {
                    dialog: {
                        maxW: "300px",
                    }
                }
            },
        },
    }
});

export default theme;