import { sourceSerifPro } from "@/app/(libs)/fonts/SourceSerifPro"
import HeroButton from "../HeroButton"

const HeroText = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className={`font-bold text-5xl lg:text-6xl ${sourceSerifPro.className}`}>Hello there 👋</h1>
            <div className="flex flex-col gap-3 font-base font-medium 
            text-lg md:text-2xl tracking-wide">
                <p className="">
                    {`I'm Asley, a python and full stack developer based in Montréal, Canada.`}
                </p>
                <p>
                    {`I love learning new stuff and creating pretty websites.`}
                </p>
            </div>
            <div className="flex">
                <HeroButton link="/#work" text="Check out my work" className="text-xl md:text-lg" />
            </div>
        </div>
    )
}

export default HeroText