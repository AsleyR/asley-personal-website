import Image from "next/image"

const HeroImage = () => {
    return (
        <div className="hidden lg:flex items-center w-full h-full justify-end">
            <Image
                className="w-[22rem] h-full"
                priority
                width={500}
                height={500}
                src={'/images/programmer.svg'} alt="Hero image" />
        </div>
    )
}

export default HeroImage