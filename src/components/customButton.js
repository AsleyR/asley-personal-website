import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CustomButton = ({ text, link }) => {

  // Determine if link goes outside the website or not
  const [linkTarget, setTarget] = useState(() => {
    if (link[0] === "#") {
      return "_self"
    }
    else {
      return "_blank"
    }
  })

  return (
    <div className='custom-button-container'>
      {console.log(link[0])}
        <div className='button'>
            <a className='button-link' href={link} target={linkTarget}>{text}</a>
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
