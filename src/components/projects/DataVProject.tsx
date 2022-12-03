import React from 'react'
import ProjectTag from '../ProjectTag'

const DataVProject = () => {
  return (
    <article className='grid grid-cols-1 items-center md:grid-cols-2 gap-10 lg:gap-28 transition-all'>
      <section className='grid gap-5'>
        <div className='flex'>
          <h1 className='text-3xl lg:text-4xl hover:scale-105 origin-bottom-left transition-all font-bold'>
            <a className='hover:text-gray-600 transition-all' href='https://github.com/AsleyR/Data-Visualizer' target={'_blank'} rel='noreferrer'>Data Visualizer</a>
          </h1>
        </div>
        <p className='pr-0 sm:pr-[8rem] md:pr-0 text-xl leading-8 text-[#888888]'>Python program that visualizes data from a ".csv" file. It uses the library PySimpleGui for its GUI.</p>
        <section>
          <ul className='flex flex-row flex-wrap gap-3'>
              <ProjectTag text='Personal Project'/>
              <ProjectTag text='Python'/>
              <ProjectTag text='GUI'/>
              <ProjectTag text='Data Parsing'/>
              <ProjectTag text='Desktop Program'/>
          </ul>
        </section>
      </section>
      <a className='order-first md:order-none' href='https://github.com/AsleyR/Data-Visualizer' target={'_blank'} rel='noreferrer'>
        <img className='block max-w-full h-auto object-cover shadow-xl cursor-pointer hover:scale-105 rounded-lg duration-500 transition-all' src='./images/data-v-logo.svg' alt='Data Visualizer Logo'></img>
      </a>
    </article>
  )
}

export default DataVProject
