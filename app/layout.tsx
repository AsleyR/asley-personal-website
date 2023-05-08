import Navbar from './(components)/navbar/Navbar'
import { montserrat } from './(libs)/fonts/Monserrat'
import './globals.css'

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
