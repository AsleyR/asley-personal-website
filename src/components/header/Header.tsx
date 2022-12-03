import React, { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa'

const Header = () => {
  const [openMenu, setOpenMenu] = useState<Boolean>(false)
  const resumePath: String = '/resume-asleyrobleto.pdf' // File path of resume

  const changePageTitle = (newTitle: string) => {
    document.title = newTitle;
  }

  const renderMobileMenu = () => {
    return (
        <nav className='z-10 sticky top-[4.9rem]'>
            <ul className={`absolute inset-x-0 md:hidden ${openMenu? 'top-[0]':'-top-[30rem]'} px-[1rem] grid bg-white border-y border-gray-300 drop-shadow duration-500 transition-all`}>
                <a className='hover:bg-gray-100 active:bg-gray-200 border-b border-gray-300 px-[1rem] py-4 cursor-pointer' href='/#work' onClick={() => {changePageTitle('My work - Asley Robleto'); setOpenMenu(false)}}>Work</a>
                <a className='hover:bg-gray-100 active:bg-gray-200 border-b border-gray-300 px-[1rem] py-4 cursor-pointer' href="/#about" onClick={() => {changePageTitle('About me - Asley Robleto'); setOpenMenu(false)}}>About</a>
                <a className='hover:bg-gray-100 active:bg-gray-200 border-b border-gray-300 px-[1rem] py-4 cursor-pointer' href="/#contact" onClick={() => {changePageTitle('Contact me - Asley Robleto'); setOpenMenu(false)}}>Contact</a>
                <a className='hover:bg-gray-100 active:bg-gray-200 px-[1rem] py-4 cursor-pointer' href={`${resumePath}`} target={'_blank'} rel="noreferrer" onClick={() => {changePageTitle('Asley Robleto'); setOpenMenu(false)}}>Resume</a>
            </ul>
        </nav>
    )
  }

  return (
    <>
    <header className='z-20 h-full sticky bg-white top-0 grid grid-cols-2 overflow-hidden items-center py-[1.2rem] px-[2rem] sm:px-[4rem] xl:px-[11rem] drop-shadow-sm transition-all'>
      <div className='flex'>
        <a href="/#" onClick={() => {changePageTitle('Asley Robleto'); setOpenMenu(false)}}>
          <h1 className='font-source-serif text-4xl md:text-3xl font-bold cursor-pointer transition-all'>AR</h1>
        </a>
      </div>
      <div className='justify-self-end'>
        <nav>
          <ul className='hidden md:inline-flex gap-16'>
            <li><a className='hover:text-gray-500 duration-150' href="/#work" onClick={() => changePageTitle('My work - Asley Robleto')}>Work</a></li>
            <li><a className='hover:text-gray-500 duration-150' href="/#about" onClick={() => changePageTitle('About me - Asley Robleto')}>About</a></li>
            <li><a className='hover:text-gray-500 duration-150' href="/#contact" onClick={() => changePageTitle('Contact me - Asley Robleto')}>Contact</a></li>
            <li><a className='hover:text-gray-500 duration-150' href="/resume-asleyrobleto.pdf" target={'_blank'} rel="noreferrer" onClick={() => changePageTitle('Asley Robleto')}>Resume</a></li>
          </ul>
        </nav>
        {openMenu ?
        <FaTimes className='block md:hidden cursor-pointer text-3xl' onClick={() => setOpenMenu(!openMenu)}/>
        :
        <FaBars className='block md:hidden cursor-pointer text-3xl' onClick={() => setOpenMenu(!openMenu)}/>
        }
      </div>
    </header>
    {renderMobileMenu()}
    </>
  )
}

export default Header
