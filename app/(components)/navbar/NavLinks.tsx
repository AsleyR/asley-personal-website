import { NavLinkComponentProps, NavbarComponentProps } from "@/app/(types)/index.types"
import NavLink from "./NavLink"

const NavLinks = ({ className }: NavbarComponentProps) => {
    return (
        <div className={`flex justify-end items-center align-middle ${className}`}>
            <ul className="flex gap-16 tracking-wide">
                <NavLink link="#work" text="Work" />
                <NavLink link="#project" text="Project" />
                <NavLink link="/#about" text="About" />
                <NavLink link="/#contact" text="Contact" />
            </ul>
        </div>
    )
}

export default NavLinks