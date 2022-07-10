import React from 'react'
import PropTypes from 'prop-types'

const SectionTag = ({ text }) => {
  return (
    <div className='section-tag-container'>
        <p className='feature-projects-tag'>{text}</p>
    </div>
  )
}

SectionTag.propTypes = {
  text: PropTypes.string
};

export default SectionTag
