import { useContext } from "react";
import { FaTimes, FaBars } from 'react-icons/fa'
import ChangePageTitle from "../../lib/ChangePageTitle";
import { MobileMenuContextType } from "../../lib/types/context/MobileMenuContext";
import { MobileMenuContext } from "./Header";

export default function Navbar({ resumePath }: { resumePath: string }) {
    const { mobileMenu, setMobileMenu } = useContext(MobileMenuContext) as MobileMenuContextType

    return (
        <>
            <div className='justify-self-end'>
                <nav>
                    <ul className='hidden md:inline-flex gap-16'>
                        <li id="nav-li-1"><a className='hover:text-gray-500 duration-150' href="/#work" onClick={() => ChangePageTitle('My work - Asley Robleto')}>Work</a></li>
                        <li id="nav-li-2"><a className='hover:text-gray-500 duration-150' href="/#about" onClick={() => ChangePageTitle('About me - Asley Robleto')}>About</a></li>
                        <li id="nav-li-3"><a className='hover:text-gray-500 duration-150' href="/#contact" onClick={() => ChangePageTitle('Contact me - Asley Robleto')}>Contact</a></li>
                        <li id="nav-li-4"><a className='hover:text-gray-500 duration-150' href={resumePath} target={'_blank'} rel="noreferrer" onClick={() => ChangePageTitle('Asley Robleto')}>Resume</a></li>
                    </ul>
                </nav>
                {mobileMenu ?
                    <FaTimes className='block md:hidden cursor-pointer text-3xl' onClick={() => setMobileMenu(!mobileMenu)} />
                    :
                    <FaBars className='block md:hidden cursor-pointer text-3xl' onClick={() => setMobileMenu(!mobileMenu)} />
                }
            </div>
        </>
    )
}