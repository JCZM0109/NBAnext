
import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';


export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}
