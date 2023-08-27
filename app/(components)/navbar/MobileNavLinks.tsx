"use client"

import { useContext } from "react"

import { NavbarComponentProps } from "@/app/(types)/index.types"
import NavLink from "./NavLink"
import { MobileNavLinkType } from "@/app/(context)/MobileNavLink"
import { MobileNavLinkContext } from "./Navbar"

const MobileNavLinks = ({ className }: NavbarComponentProps) => {
    const { mobileNavLink, setMobileNavLink } = useContext(MobileNavLinkContext) as MobileNavLinkType

    return (
        <div className={`${className} absolute inset-x-0 ${mobileNavLink ? "top-[3.5rem]" : "-top-[20rem]"} h-[full] -z-10 bg-white drop-shadow transition-all`}>
            <ul className="flex flex-col w-full tracking-wide">
                <NavLink onClick={() => setMobileNavLink(!mobileNavLink)} link="#work" text="Work" className="border-b px-mobilex py-[1rem] hover:bg-gray-100 hover:text-inherit w-full" />
                <NavLink onClick={() => setMobileNavLink(!mobileNavLink)} link="#project" text="Project" className="border-b px-mobilex py-[1rem] hover:bg-gray-100 hover:text-inherit w-full" />
                <NavLink onClick={() => setMobileNavLink(!mobileNavLink)} link="/#about" text="About" className="border-b px-mobilex py-[1rem] hover:bg-gray-100 hover:text-inherit w-full" />
                <NavLink onClick={() => setMobileNavLink(!mobileNavLink)} link="/#contact" text="Contact" className="px-mobilex py-[1rem] hover:bg-gray-100 hover:text-inherit w-full" />
            </ul>
        </div>
    )
}

export default MobileNavLinks
