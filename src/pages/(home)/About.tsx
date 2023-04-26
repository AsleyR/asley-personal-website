import React from 'react'
import SectionTag from '../../components/SectionTag'
import { Fade } from 'react-awesome-reveal'

const About = () => {
  return (
    <article className='py-[6rem]' id='about'>
      <SectionTag title='ABOUT ME' />
      <Fade direction='up' triggerOnce={true}>
        <article className='grid grid-cols-[auto_min-content] items-center gap-0 md:gap-20 mt-16'>
          <section className='grid gap-5'>
            <h1 className='font-source-serif text-4xl font-bold'>Python and full stack developer from Montreal, Canada.</h1>
            <p className='text-lg leading-9'>
              I'm a solution oriented full stack developer. I'm fascinated by all-things regarding the world of tech, and I enjoy working in web development because of the satisfaction that I get by overcoming challenges and designing pretty websites. I'm motivated by the idea of working on software that may help someone life for the better. If I'm not learning some new tech, or working on a personal project, I'm chilling with a cup of coffee by my side.
            </p>
            <p className='text-lg leading-9'>
              I work mostly with React and Express to make web apps, but for my other projects, I usually just work with Python to create small desktop programs using various tools and libraries depending on what the project requires.
            </p>
          </section>
          <div className='flex justify-center w-0 lg:w-[20rem]'>
            <img className='hover:scale-105 transition-all duration-500' src='./images/programming.svg' alt=''></img>
          </div>
        </article>
      </Fade>
    </article>
  )
}

export default About