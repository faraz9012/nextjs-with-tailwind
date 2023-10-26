import {Footer, Navbar } from '@/components'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'My first fullstack app on NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
