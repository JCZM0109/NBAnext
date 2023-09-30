import AuthProvider from './context/AuthProvider'
import ChakraProviders from './context/ChakraUIProv'
import './layout.css'


export const metadata = {
  title: `JZ'S CORNER`,
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' type='image/png' href='@icons8-basketball-16.png'/>
      </head>
      <body>
        <ChakraProviders>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ChakraProviders>
      </body>
    </html>
  )
}
