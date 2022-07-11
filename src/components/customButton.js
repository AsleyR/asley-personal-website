import React from 'react'
import PropTypes from 'prop-types'

const CustomButton = ({ text, link }) => {
  return (
    <div className='custom-button-container'>
        <div className='button'>
            <a className='button-link' href={link}>{text}</a>
        </div>
    </div>
  )
}

CustomButton.defaultProps = {
  link: "#"
}

CustomButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string
}

export default CustomButton
