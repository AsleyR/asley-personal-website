import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='logo-container'>
            <h1>
                <a href='/'>Asley Robleto</a>
            </h1>
        </div>
      <ul className='navbar-list'>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='/'>About</a>
        </li>
        <li>
            <a href='/'>Contact Me</a>
        </li>
        <li>
            <a href='/'>Resume</a>
        </li>
      </ul>
    </div>
  )
}

export default Header
