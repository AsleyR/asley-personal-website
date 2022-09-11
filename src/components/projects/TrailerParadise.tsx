import React from 'react'
import ProjectTag from '../ProjectTag'

const TrailerParadise = () => {
  return (
    <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-10 lg:gap-28 transition-all'>
      <div className='grid gap-5'>
        <h1 className='text-3xl lg:text-4xl font-bold'>
            <a className='hover:text-gray-800 transition-all' href='https://github.com/AsleyR/Trailer-Paradise' target={'_blank'}>Trailer Paradise</a>
        </h1>
        <p className='pr-0 sm:pr-[8rem] md:pr-0 text-xl leading-8 text-[#888888]'>Website where you can watch movie and series trailers. It's made using typescript and the MERN stack. </p>
        <ul className='flex flex-row flex-wrap gap-3'>
            <ProjectTag text='Personal Project'/>
            <ProjectTag text='TypeScript'/>
            <ProjectTag text='MERN Stack'/>
            <ProjectTag text='RESTful API'/>
            <ProjectTag text='Data Parsing'/>
            <ProjectTag text='Mobile Friendly'/>
        </ul>
      </div>
      <a className='order-first md:order-none' href='https://github.com/AsleyR/Trailer-Paradise' target={'_blank'}>
        <img className='block max-w-full h-auto object-cover shadow-xl cursor-pointer hover:scale-105 rounded-lg duration-500 transition-all' src='./images/tp-logo.svg'></img>
      </a>
    </div>
  )
}

export default TrailerParadise
