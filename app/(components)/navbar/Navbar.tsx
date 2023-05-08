"use client"

import { createContext, useState } from "react"
import dynamic from "next/dynamic"

import NavLinks from "./NavLinks"
import Logo from "./Logo"
import Container from "../Container"
import { MobileNavLink, MobileNavLinkType } from "@/app/(context)/MobileNavLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

const MobileNavLinks = dynamic(() =>
    import('./MobileNavLinks')
)

export const MobileNavLinkContext = createContext<MobileNavLinkType | null>(null)

const Navbar = () => {
    const [mobileNavLink, setMobileNavLink] = useState<MobileNavLink['mobileNavLink']>(false)

    return (
        <>
            <MobileNavLinkContext.Provider value={{ mobileNavLink, setMobileNavLink }}>
                <Container className="sticky top-0 z-40 bg-white shadow-box border-b">
                    <nav className="z-40 grid grid-cols-2 items-center transition-all">
                        <Logo />
                        <NavLinks className="hidden md:flex" />
                        <button onClick={() => setMobileNavLink(!mobileNavLink)}
                            className="justify-self-end block md:hidden w-min h-full">
                            <FontAwesomeIcon className="w-[1.8rem] h-full"
                                icon={mobileNavLink ? faXmark : faBars} />
                        </button>
                    </nav>
                    <MobileNavLinks className={'flex md:hidden'} />
                </Container>
            </MobileNavLinkContext.Provider>
        </>
    )
}

export default Navbar
