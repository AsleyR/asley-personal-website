import { NavLinkComponentProps } from "@/app/(types)/index.types"

const NavLink = ({ text, className, link, onClick }: NavLinkComponentProps) => {
    return (
        <a
            className={`hover:text-gray-500 transition-all duration-100 ${className}`}
            onClick={onClick}
            href={`${link || "/"}`}
        >
            {text}
        </a>
    )
}

export default NavLink