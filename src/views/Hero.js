import React from 'react'
import ScrollReveal from 'scrollreveal'

const Content = () => {
    ScrollReveal().reveal('.content-container', {delay: 600})
  return (
    <div className='hero-container'>
      <div className='area-1'>
        <h1>Tes</h1>
      </div>
      <div className='area-2'>
        <h2>TEEE</h2>
      </div>
    </div>
  )
}

export default Content
