import React from 'react'
import Footer from '../components/footer/Footer'
import About from './(home)/About'
import Hero from './(home)/Hero'
import Work from './(home)/Work'
import Contact from './(home)/Contact'

const Home = () => {
  return (
    <main>
      <Hero />
      <div className='px-[2rem] sm:px-[4rem] xl:px-[11rem] transition-all'>
        <Work />
        <About />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default Home
