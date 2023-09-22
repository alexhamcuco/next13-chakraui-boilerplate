"use client"

import { Inter } from 'next/font/google'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './navbar/layout'
import MainDiv from '@/maindiv'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider>
          <ChakraProvider>
              <Navbar />
              <MainDiv />
              {children}
          </ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  )
}
