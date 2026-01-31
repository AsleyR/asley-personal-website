import Image from "next/image"
import SectionTag from "../SectionTag"
import { sourceSerifPro } from "@/app/(libs)/fonts/SourceSerifPro"
import Container from "../Container"


const About = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[auto_min-content] 
        gap-[0rem] xl:gap-[5rem] items-end place-content-end">
            <div className="flex flex-col gap-5 text-lg py-20">
                <SectionTag id="about" text="ABOUT ME" />
                <h2 className={`${sourceSerifPro.className} font-bold text-3xl md:text-4xl`}>
                    Aspiring Accountant, Python and full stack developer.
                </h2>
                <p className="leading-9">
                    {`I'm a Full-Stack Developer who enjoys building clean, efficient web applications with 
                    real-world impact. I work across both front-end and back-end technologies and focus on 
                    creating solutions that are practical, scalable, and user-focused. If I'm not learning some 
                    new tech, or working on a personal project, I'm chilling with a cup of coffee by my side.`}
                </p>
                <p className="leading-9">
                    {`I'm currently studying Accounting at McGill University, which allows me to combine strong 
                    technical skills with a solid understanding of business, finance, and data. This mix helps 
                    me build software that makes sense not just technically, but operationally and financially 
                    as well.`}
                </p>
                <p className="leading-9">
                    {`I work mostly with Next.js, Express and MongoDB to make web apps, but for my other projects, 
                    I usually just work with Python to create small desktop programs using various tools and libraries 
                    depending on what the project requires.`}
                </p>
                <p className="leading-9"> 
                    {`I'm constantly learning, improving my craft, and staying up to date with modern tools and best 
                    practices. I'm especially interested in projects where technology, data, and business needs 
                    intersect`}
                </p>
            </div>
             <div className="hidden lg:flex w-[25rem] h-full pr-5 justify-self-end about-me-pic">
            </div>
        </div>
    )
}

const AboutSection = () => {
    return (
        <section className=" bg-[#fafaf5]">
            <div className="w-full h-8 bg-[#202020]"></div>
            <Container className="w-full h-full">
                <About />
            </Container>
            <div className="w-full h-8 bg-[#f2f2f2] drop-shadow"></div>
        </section>
    )
}

export default AboutSection
