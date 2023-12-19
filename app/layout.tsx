import { Metadata } from 'next'
import Navbar from './(components)/navbar/Navbar'
import { montserrat } from './(libs)/fonts/Monserrat'
import './globals.css'

export const metadata: Metadata = {
  title: 'Asley Robleto',
  description: 'A python and full stack developer based in Montréal, Canada. I love learning new stuff and creating pretty websites.',
  alternates: {
    canonical: `${process.env.BASE_URL}`
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`${montserrat.className}`}>
        <Navbar />
        <div className="">
          {children}
        </div>
      </body>
    </html>
  )
}
