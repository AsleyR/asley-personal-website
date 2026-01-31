import Image from "next/image"
import HeroImage from "../hero/HeroImage"
import HeroText from "../hero/HeroText"

const HeroSection = () => {
    return (
        <>
            <section className="relative z-10 bg-[#2c2718] lg:bg-inherit grid grid-cols-1 
            lg:grid-cols-2 items-center align-middle gap-5 lg:gap-5
            py-[4rem] lg:py-[8rem] px-mobilex lg:px-normalx
            text-gray-50">
                {/* Regular background */}
                <div className="absolute inset-0 -z-10 bg-black/40"></div>
                <div className="hidden lg:block absolute w-full h-full inset-0 -z-20 hero-pic"></div>
                
                {/* Mobile Background */}
                <div className="polka-dots absolute block lg:hidden inset-0 -z-10"></div>

                <div className="relative z-20 w-full h-full rounded-xl p-5 ml-0 lg:-ml-5">
                    <div className="hidden lg:block absolute inset-0 -z-10 text-glass-effect"></div>
                    <HeroText />
                </div>
                <div className="justify-self-center">
                    <div className="rounded-xl shadow-2xl">
                        <Image
                        className="flex lg:hidden rounded-xl"
                        src={'/images/asley-pics/asley-1.jpg'}
                        alt="Asley mobile pic"
                        width={500}
                        height={500}
                        />
                    </div>
                </div>
            </section>
            <div className="w-full h-8 bg-[#202020] drop-shadow-md"></div>
        </>
    )
}

export default HeroSection