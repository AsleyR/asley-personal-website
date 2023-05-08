import Image from "next/image"
import SectionTag from "../SectionTag"
import { sourceSerifPro } from "@/app/(libs)/fonts/SourceSerifPro"


const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[auto_min-content] gap-[2rem] xl:gap-[5rem] items-center align-middle">
            <div className="flex flex-col gap-5 text-lg">
                <h1 className={`${sourceSerifPro.className} font-bold text-3xl md:text-4xl`}>Python and full stack developer from Montréal, Canada.</h1>
                <p className="leading-9">
                    {`I'm a solution oriented full stack developer. I'm fascinated by all-things regarding the world of tech, and I enjoy working in web development because of the satisfaction that I get by overcoming challenges and designing pretty websites. I'm motivated by the idea of working on software that may help someone life for the better. If I'm not learning some new tech, or working on a personal project, I'm chilling with a cup of coffee by my side.`}
                </p>
                <p className="leading-9">
                    {`I work mostly with Next.js, Express and MongoDB to make web apps, but for my other projects, I usually just work with Python to create small desktop programs using various tools and libraries depending on what the project requires.`}
                </p>
            </div>
            <div className="hidden lg:flex justify-center w-[23rem] h-full">
                <Image className="w-[20rem] h-full"
                    width={400} height={400} src={'/images/programming.svg'} alt="" />
            </div>
        </div>
    )
}

const AboutSection = () => {
    return (
        <section className="my-[5rem]">
            <SectionTag id="about" text="ABOUT ME" />
            <About />
        </section>
    )
}

export default AboutSection
