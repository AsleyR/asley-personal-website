import React from 'react'
import PropTypes from 'prop-types'

const ProjectTag = ({ text }) => {
  return (
    <div className='project-tag-container'>
      <span className='project-tag'>{text}</span>
    </div>
  )
}

ProjectTag.propTypes = {
    text: PropTypes.string
}

export default ProjectTag
