import React from 'react'
import BtnUnderline from '../BtnUnderline'
import { Fade } from 'react-awesome-reveal'

const Hero = () => {
  return (
    <article className='bg-gray-bg md:bg-transparent align-middle grid grid-cols-auto lg:grid-cols-2 pb-[7.2rem] py-[3rem] md:py-[3rem] md:pt-[7rem] md:pb-[11rem] px-[2rem] sm:px-[4rem] xl:px-[11rem]'>
       <Fade direction='down' triggerOnce={true}>
        <section className='relative grid gap-5 mlg:gap-6'>
            <h1 className='font-source-serif font-bold text-6xl sm:text-7xl lg:text-6xl'>Hello there 👋</h1>
            <p className='leading-9 text-xl lg:text-2xl lg:leading-[40px] pb-[2rem]'>I'm Asley, a python and full stack developer based in Montreal, Canada. I love creating things that can help someone's life for the better.</p>
            <BtnUnderline text='Check out my work' link='work'/>
        </section>
      </Fade>
      <Fade direction='down' triggerOnce={true}>
        <section className="ml-5 hidden lg:grid justify-center content-center w-full">
          <img className='max-w-full w-[18rem] h-auto' src="images/programmer.svg" alt="Programmer" />
        </section>
      </Fade>
    </article>
  )
}

export default Hero
