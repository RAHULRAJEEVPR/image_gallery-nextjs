import "bootstrap/dist/css/bootstrap.min.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Container, SSRProvider } from "@/components/bootstrap"
import NavBar from "./NavBar"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nextjs 13.4 Image Gallery',
  description: 'learning next js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <main>
        <NavBar/>
        <Container>

        {children}
        </Container>
        </main>
        </body>
    </html>
  )
}
