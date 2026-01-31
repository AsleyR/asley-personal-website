import { sourceSerifPro } from "@/app/(libs)/fonts/SourceSerifPro"
import HeroButton from "../HeroButton"

const HeroText = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className={`font-bold text-6xl ${sourceSerifPro.className}`}>Hello there 👋</h1>
            <p className="font-base font-medium text-xl md:text-2xl tracking-wide">
                {`I'm Asley, a python and full stack developer based in Montréal, Canada. I love learning new stuff and creating pretty websites.`}
            </p>
            <div className="flex">
                <HeroButton link="/#work" text="Check out my work" className="text-xl md:text-lg" />
            </div>
        </div>
    )
}

export default HeroText