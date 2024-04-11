import Navbar from "../components/Navbar"

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
