import React from 'react'
import Footer from '../components/footer/Footer'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Hero from '../components/home/Hero'
import Work from '../components/home/Work'

const Home = () => {
  return (
    <main>
      <Hero/>
      <div className='px-[2rem] sm:px-[4rem] xl:px-[11rem] transition-all'>
        <Work/>
        <About/>
        <Contact/>
      </div>
      <Footer/>
    </main>
  )
}

export default Home
