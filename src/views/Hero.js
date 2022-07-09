import React from 'react'
import ScrollReveal from 'scrollreveal'

const Content = () => {
    ScrollReveal().reveal('.content-container', {delay: 600})
  return (
    <div className='hero-container'>
      <div className='area-1'>
        <div className='hello-header'>
          <h1>Hello there 👋</h1>
        </div>
        <div className='hello-content'>
          <p>
            I'm Asley, a python and full stack developer based in
            Nicaragua. I love creating things that
            can help someone's life for the better.
          </p>
        </div>
        <div className='check-work'>
          <a href='#'>Check out my work</a>
        </div>
      </div>
      <div className='area-2'>
        <h2>TEEE</h2>
      </div>
    </div>
  )
}

export default Content
