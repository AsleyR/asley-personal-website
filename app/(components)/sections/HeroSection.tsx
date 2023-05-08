import HeroImage from "../hero/HeroImage"
import HeroText from "../hero/HeroText"

const HeroSection = () => {
    return (
        <section className="bg-[#f2f2f2] md:bg-inherit grid grid-cols-1 lg:grid-cols-2 items-center align-middle py-[8rem] px-mobilex lg:px-normalx">
            <div className="z-20 w-full h-full">
                <HeroText />
            </div>
            <HeroImage />
        </section>
    )
}

export default HeroSection