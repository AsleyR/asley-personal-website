import React from 'react'
import DataVProject from '../projects/DataVProject'
import TrailerParadise from '../projects/TrailerParadise'
import Youter from '../projects/Youter'
import SectionTag from '../SectionTag'

const Work = () => {
  return (
    <article className='py-[6rem]' id='work'>
        <SectionTag text='FEATURE PROJECTS'/>
        <section className='grid gap-[10rem] mt-16'>
            <DataVProject/>
            <Youter/>
            <TrailerParadise/>
        </section>
    </article>
  )
}

export default Work
