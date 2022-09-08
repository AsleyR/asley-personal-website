import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 grid grid-cols-2 overflow-hidden items-center py-[1.2rem] px-[6rem]'>
      <a href='/'>
        <h1 className='font-source-serif text-3xl font-bold'>AR</h1>
      </a>
      <nav className='justify-self-end'>
        <ul className='inline-flex gap-16'>
            <li><a href="#work">Work</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
