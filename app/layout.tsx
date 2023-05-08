import Navbar from './(components)/navbar/Navbar'
import './globals.css'
import { Montserrat, Source_Serif_Pro } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-montserrat"
})
export const sourceSerifPro = Source_Serif_Pro({
  weight: ['200', '300', '400', "600", "700", "900"],
  subsets: ['latin'],
  variable: '--font-source-serif-pro'
})

export const metadata = {
  title: 'Asley Robleto',
  description: 'Welcome to my personal website and portfolio!',
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
