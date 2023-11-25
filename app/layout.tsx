import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="mx-auto flex min-h-[100vh] max-w-[1366px] flex-col justify-between px-[60px]">
          <Navbar />
        {children}
        <Footer />
        </div>
        
      </body>
      
    </html>
  )
}
