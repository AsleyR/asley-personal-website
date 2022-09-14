import React from 'react'
import ProjectTag from '../ProjectTag'

const Youter = () => {
  return (
    <article className='grid grid-cols-1 items-center md:grid-cols-2 gap-10 lg:gap-28 transition-all'>
      <a className='order-first md:order-none' href='https://github.com/AsleyR/Youter' target={'_blank'} rel='noreferrer'>
        <img className='block max-w-full h-auto object-cover shadow-xl cursor-pointer hover:scale-105 rounded-lg duration-500 transition-all' src='./images/youter-logo.svg' alt='YouTer Logo'></img>
      </a>
      <section className='grid gap-5'>
        <div className='flex'>
          <h1 className='text-3xl lg:text-4xl hover:scale-105 origin-bottom-left transition-all font-bold'>
            <a className='hover:text-gray-600 transition-all' href='https://github.com/AsleyR/Youter' target={'_blank'} rel='noreferrer'>YouTer</a>
          </h1>
        </div>
        <p className='pr-0 sm:pr-[8rem] md:pr-0 text-xl leading-8 text-[#888888]'>Terminal based gui program that downloads youtube videos in mp4 or mp3 formats. It uses youtube-dl and ffmpeg.</p>
        <section>
          <ul className='flex flex-row flex-wrap gap-3'>
            <ProjectTag text='Personal Project'/>
            <ProjectTag text='Python'/>
            <ProjectTag text='Command Line Tool'/>
            <ProjectTag text='Youtube-dl'/>
            <ProjectTag text='Ffmpeg'/>
            <ProjectTag text='Terminal Based Program'/>
          </ul>
        </section>
      </section>
    </article>
  )
}

export default Youter
