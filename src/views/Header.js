import React from 'react'
import Navbar from '../components/header/navbar'
import Logo from '../components/header/logo'

const Header = ({ sticky }) => {
  return (

    <div className='header-container'>
        <Logo/>
        <Navbar/>
    </div>
  )
}

export default Header
