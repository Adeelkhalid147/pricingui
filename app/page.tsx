"use client"
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
import { ChakraProvider, Heading, Text } from "@chakra-ui/react"
import Features from "./Features"
import Header from "./Header"
import Pricing from "./pricing"


export default function Home() {
  return (
     
    <ChakraProvider>
      <Header/>
      <Pricing/>
      <Features/>
    </ChakraProvider>

    
    )
}
