import { createContext, useState } from 'react'
import { MobileMenuContextType } from '../../lib/types/context/MobileMenuContext';

import Navbar from './Navbar';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export const MobileMenuContext = createContext<MobileMenuContextType | null>(null)

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)
  const resumePath: string = process.env.REACT_APP_RESUME_PATH || '/resume-asleyrobleto.pdf' // File path of resume

  return (
    <>
      <MobileMenuContext.Provider value={{ mobileMenu, setMobileMenu }}>
        <header className='z-20 h-full sticky bg-white top-0 grid grid-cols-2 overflow-hidden items-center py-[1.2rem] px-[2rem] sm:px-[4rem] xl:px-[11rem] drop-shadow-sm transition-all'>
          <Logo />
          <Navbar resumePath={resumePath} />
        </header>
        <MobileMenu resumePath={resumePath} />
      </MobileMenuContext.Provider>
    </>
  )
}

export default Header
