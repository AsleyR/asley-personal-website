import HeroImage from "../hero/HeroImage"
import HeroText from "../hero/HeroText"

const HeroSection = () => {
    return (
        <>
            <section className="relative z-10 bg-[#f2f2f2] md:bg-inherit grid grid-cols-1 
            lg:grid-cols-2 items-center align-middle py-[8rem] px-mobilex lg:px-normalx
            hero-pic text-gray-50">
                <div className="absolute inset-0 -z-10 bg-black/40"></div>
                <div className="z-20 w-full h-full">
                    <HeroText />
                </div>
                {/* <HeroImage /> */}
            </section>
            <div className="w-full h-8 bg-[#202020] drop-shadow-md"></div>
        </>
    )
}

export default HeroSection