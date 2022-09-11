import React from 'react'
import ProjectTag from '../ProjectTag'

const DataVProject = () => {
  return (
    <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-10 lg:gap-28 transition-all'>
      <div className='grid gap-5'>
        <h1 className='text-3xl lg:text-4xl font-bold'>
            <a className='hover:text-gray-800 transition-all' href='https://github.com/AsleyR/Data-Visualizer' target={'_blank'}>Data Visualizer</a>
        </h1>
        <p className='pr-0 sm:pr-[8rem] md:pr-0 text-xl leading-8 text-[#888888]'>A simple python program that visualizes data from a ".csv" file. It uses the library PySimpleGui for its GUI.</p>
        <ul className='flex flex-row flex-wrap gap-3'>
            <ProjectTag text='Personal Project'/>
            <ProjectTag text='Python'/>
            <ProjectTag text='GUI'/>
            <ProjectTag text='Data Parsing'/>
            <ProjectTag text='Desktop Program'/>
        </ul>
      </div>
      <a className='order-first md:order-none' href='https://github.com/AsleyR/Data-Visualizer' target={'_blank'}>
        <img className='block max-w-full h-auto object-cover shadow-xl cursor-pointer hover:scale-105 rounded-lg duration-500 transition-all' src='./images/data-v-logo.svg'></img>
      </a>
    </div>
  )
}

export default DataVProject
