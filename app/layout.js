'use client'
import { AnimatePresence } from 'framer-motion'
import AuthProvider from './context/AuthProvider'
import ChakraProviders from './context/ChakraUIProv'
import './layout.css'
import MetaData from "./metadata"



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href="/favicon.ico"/>
        <MetaData/>
      </head>
      <body>
        <ChakraProviders>
          <AuthProvider>
            <AnimatePresence mode="wait" initial="false">
            {children}
            </AnimatePresence>
          </AuthProvider>
        </ChakraProviders>
      </body>
    </html>
  )
}
