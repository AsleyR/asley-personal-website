import React from 'react'
import ProjectTag from '../ProjectTag'

const TrailerParadise = () => {
  return (
    <article className='grid grid-cols-1 items-center md:grid-cols-2 gap-10 lg:gap-28 transition-all'>
      <section className='grid gap-5'>
        <div className='flex'>
          <h1 className='text-3xl lg:text-4xl hover:scale-105 origin-bottom-left transition-all font-bold'>
            <a className='hover:text-gray-600 transition-all' href='https://github.com/AsleyR/Trailer-Paradise' target={'_blank'} rel='noreferrer'>Trailer Paradise</a>
          </h1>
        </div>
        <p className='pr-0 sm:pr-[8rem] md:pr-0 text-xl leading-8 text-[#888888]'>Website where you can watch movie and series trailers. It's made using typescript and the MERN stack. </p>
        <section>
          <ul className='flex flex-row flex-wrap gap-3'>
            <ProjectTag text='Personal Project'/>
            <ProjectTag text='TypeScript'/>
            <ProjectTag text='MERN Stack'/>
            <ProjectTag text='RESTful API'/>
            <ProjectTag text='Data Parsing'/>
            <ProjectTag text='Mobile Friendly'/>
          </ul>
        </section>
      </section>
      <a className='order-first md:order-none' href='https://github.com/AsleyR/Trailer-Paradise' target={'_blank'} rel='noreferrer'>
        <img className='block max-w-full h-auto object-cover shadow-xl cursor-pointer hover:scale-105 rounded-lg duration-500 transition-all' src='./images/tp-logo.svg' alt='Trailer Paradise Logo'></img>
      </a>
    </article>
  )
}

export default TrailerParadise
