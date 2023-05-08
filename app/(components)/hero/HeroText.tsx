import { sourceSerifPro } from "@/app/layout"
import ButtonComponent from "../ButtonComponent"

const HeroText = () => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className={`font-bold text-6xl ${sourceSerifPro.className}`}>Hello there 👋</h1>
            <p className="font-base text-xl md:text-2xl tracking-wider">I'm Asley, a python and full stack developer based in Montréal, Canada. I love learning new stuff and creating pretty websites.</p>
            <div className="flex">
                <ButtonComponent text="Check out my work" className="text-lg" />
            </div>
        </div>
    )
}

export default HeroText