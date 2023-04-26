import { useContext } from "react";
import { MobileMenuContextType } from "../../lib/types/context/MobileMenuContext";
import { MobileMenuContext } from "./Header";
import ChangePageTitle from "../../lib/ChangePageTitle";

export default function MobileMenu({ resumePath }: { resumePath: string }) {
    const { mobileMenu, setMobileMenu } = useContext(MobileMenuContext) as MobileMenuContextType

    return (
        <nav className='z-10 sticky top-[4.9rem]'>
            <ul className={`absolute inset-x-0 md:hidden ${mobileMenu ? 'top-[0]' : '-top-[30rem]'} px-[1rem] grid bg-white border-y border-gray-300 drop-shadow duration-500 transition-all`}>
                <a className='hover:bg-gray-100 active:bg-gray-200 border-b border-gray-300 px-[1rem] py-4 cursor-pointer' href='/#work' onClick={() => { ChangePageTitle('My work - Asley Robleto'); setMobileMenu(false) }}>Work</a>
                <a className='hover:bg-gray-100 active:bg-gray-200 border-b border-gray-300 px-[1rem] py-4 cursor-pointer' href="/#about" onClick={() => { ChangePageTitle('About me - Asley Robleto'); setMobileMenu(false) }}>About</a>
                <a className='hover:bg-gray-100 active:bg-gray-200 border-b border-gray-300 px-[1rem] py-4 cursor-pointer' href="/#contact" onClick={() => { ChangePageTitle('Contact me - Asley Robleto'); setMobileMenu(false) }}>Contact</a>
                <a className='hover:bg-gray-100 active:bg-gray-200 px-[1rem] py-4 cursor-pointer' href={`${resumePath}`} target={'_blank'} rel="noreferrer" onClick={() => { ChangePageTitle('Asley Robleto'); setMobileMenu(false) }}>Resume</a>
            </ul>
        </nav>
    )
}
