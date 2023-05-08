import Link from "next/link"
import Image from "next/image"
import SectionTag from "../SectionTag"

const Contact = () => {
    return (
        <div className="grid grid-cols-auto gap-5 pr-0 lg:pr-[25rem]">
            <Link
                className="font-bold text-3xl hover:scale-105 origin-bottom-left transition-all duration-200"
                href={'mailto:asleyrobleto@gmail.com'}>
                asleyrobleto@gmail.com
            </Link>
            <p className="text-lg">
                I'm always down to collaborate when I have the time. I dream of becoming a great developer and one day disrupt the tech ecosystem with a cool project.
            </p>
            <div className="flex gap-3">
                <Link href={'https://github.com/AsleyR'} target={'_blank'}>
                    <Image
                        className="w-10 h-full hover:scale-110 transition-all duration-200"
                        width={200}
                        height={200}
                        src={'/images/socials/github.svg'}
                        alt="github"
                    />
                </Link>
                <Link href={'https://www.linkedin.com/in/asleyr/'} target={'_blank'}>
                    <Image
                        className="w-10 h-full hover:scale-110 transition-all duration-200"
                        width={200}
                        height={200}
                        src={'/images/socials/linkedin.svg'}
                        alt="linkedin"
                    />
                </Link>
            </div>
        </div>
    )
}

const ContactSection = () => {
    return (
        <section className="my-[5rem]">
            <SectionTag id="contact" text="CONTACT ME" />
            <Contact />
        </section>
    )
}

export default ContactSection
