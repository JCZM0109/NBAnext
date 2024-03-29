'use client'
import { AnimatePresence } from 'framer-motion'
import AuthProvider from './context/AuthProvider'
import ChakraProviders from './context/ChakraUIProv'
import './layout.css'




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>JZ's CORNER</title>
        <link rel='icon' href="/favicon.ico"/>
        <meta name="description" content="Portfolio website"/>
      </head>
      <body>
        <ChakraProviders>
          <AuthProvider>
            <AnimatePresence mode="wait">
            {children}
            </AnimatePresence>
          </AuthProvider>
        </ChakraProviders>
      </body>
    </html>
  )
}
