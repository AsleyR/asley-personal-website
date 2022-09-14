import React from 'react'
import DataVProject from '../projects/DataVProject'
import TrailerParadise from '../projects/TrailerParadise'
import Youter from '../projects/Youter'
import SectionTag from '../SectionTag'
import { Fade } from 'react-awesome-reveal'

const Work = () => {
  return (
    <article className='py-[6rem]' id='work'>
        <SectionTag text='FEATURE PROJECTS'/>
        <section className='grid gap-[14rem] mt-16'>
            <Fade direction='up' triggerOnce={true}>
              <DataVProject/>
            </Fade>
            <Fade direction='left' triggerOnce={true}>
              <Youter/>
            </Fade>
            <Fade direction='right' triggerOnce={true}>
              <TrailerParadise/>
            </Fade>
        </section>
    </article>
  )
}

export default Work
