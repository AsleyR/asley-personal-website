import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <ul className='navbar-ul'>
            <li><a href='#'>Work</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Resume</a></li>
            <li className='contact'><a href='#'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar
