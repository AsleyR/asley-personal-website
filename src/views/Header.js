import React from 'react'

const Header = () => {
  return (

    <div className='header-container'>
        <div className='logo-container'>
          <span className='logo'>
            <a href='/'>AR</a>
          </span>
        </div>
        <div className='navbar-container'>
          <ul className='navbar-ul'>
            <li><a href='#'>Work</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Resume</a></li>
            <li className='contact'><a href='#'>Contact</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header
