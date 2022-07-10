import React from 'react'
import PropTypes from 'prop-types'

const sectionTag = ({ text }) => {
  return (
    <div className='section-tag-container'>
        <p className='feature-projects-tag'>{text}</p>
    </div>
  )
}

sectionTag.propTypes = {
  text: PropTypes.string
};

export default sectionTag
