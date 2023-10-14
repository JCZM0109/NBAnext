'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/chakraTheme'
import { AnimatePresence, motion } from 'framer-motion'



export default function ChakraProviders({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
    </CacheProvider>
  )
}