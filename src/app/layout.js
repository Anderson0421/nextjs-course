import Navbar from "@/src/components/Navbar"
import { Open_Sans } from "next/font/google"
import './global.css'

export const metadata = {
  title: 'First App on Next.js',
  description: 'My Firs App on Next.js',
  keywords: 'next.js, react, javascript, tutorial, learn',
  openGraph: {
    url: 'https://www.example.com',
    title: 'First App on Next.js',
    description: 'My Firs App on Next.js',
  },
}

const openSans = Open_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
