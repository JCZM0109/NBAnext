import { extendTheme } from "@chakra-ui/react";
import '@fontsource/rubik-mono-one';
import '@fontsource-variable/antonio';

const theme =  extendTheme({
    styles: {
        global: {
            body: {
                bg: 'black',
            },
        },
    },
    fonts: {
        heading: `'Rubik Mono One', sans-serif`,
        body: `'Antonio', sans-serif`,
    },
});


export default theme;