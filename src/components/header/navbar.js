import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar-container' id='navbar'>
        <ul className='navbar-ul'>
            <li><a href='#'>Work</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Resume</a></li>
            <li className='contact'><a href='#'>Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
