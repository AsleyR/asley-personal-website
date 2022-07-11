import React from 'react'
import SectionTag from '../components/sectionTag'
import ProjectTag from '../components/projectTag'
import CustomButton from '../components/customButton'

const Portofolio = () => {
  return (
    <div className='portfolio-container' id='project'>
      <div className='area-1'>
        <SectionTag text={"FEATURE PROJECTS"} />
        <div className='project-about'>
          <h1>Data Visualizer</h1>
          <p>
            A simple python program that visualizes data
            from a.csv file. It uses the library PySimpleGui
            for its GUI.
          </p>
        </div>
        <ProjectTag text={"Personal Project"}/>
        <CustomButton text={"View the project on Github"} link={"https://github.com/AsleyR/Data-Visualizer"}/>
      </div>
      <div className='area-2'>
        <h5>G</h5>
      </div>
    </div>
  )
}

export default Portofolio
