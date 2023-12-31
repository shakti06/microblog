import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './components/Nav'
import AddPost from './components/AddPost'
import QueryWrapper from './components/QueryWrapper'
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
         <QueryWrapper>
            <Nav/>
            <AddPost/>
            {children}
        </QueryWrapper>
       </body>
    </html>
  )
}
