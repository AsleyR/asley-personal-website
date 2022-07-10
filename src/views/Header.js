import React from 'react'
import Navbar from '../components/navbar'

const Header = () => {
  return (

    <div className='header-container'>
        <div className='logo-container'>
          <span className='logo'>
            <a href='/'>AR</a>
          </span>
        </div>
        <Navbar/>
    </div>
  )
}

export default Header
