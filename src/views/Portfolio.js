import React from 'react'
import sectionTag from '../components/sectionTag'

const Portofolio = () => {
  return (
    <div className='portfolio-container'>
      <div className='area-1'>
        <sectionTag text={'FEATURE PROJECTS'} />
        <div className='project-about'>
          <h1>Data Visualizer</h1>
          <p>
            A simple python program that visualizes data
            from a.csv file. It uses the library PySimpleGui
            for its GUI.
          </p>
        </div>
      </div>
      <div className='area-2'>
        <h5>G</h5>
      </div>
    </div>
  )
}

export default Portofolio
