import { NavbarComponentProps } from "@/app/(types)/index.types"
import Image from "next/image"
import Link from "next/link"

const Logo = ({ className }: NavbarComponentProps) => {
    return (
        <a className={`w-[3.5rem] h-[3.5rem] ${className}`}
            href={'/#'}
        >
            <Image
                className="w-min h-full"
                width={200} height={200}
                src={'/images/asley-robleto.svg'} alt="Asley Robleto" />
        </a>
    )
}

export default Logo