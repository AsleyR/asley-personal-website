import Link from "next/link"
import Image from "next/image"
import SectionTag from "../SectionTag"
import Container from "../Container"

const Contact = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="grid grid-cols-auto gap-5">
                <Link
                    className="font-bold text-2xl md:text-3xl hover:scale-105 origin-bottom-left transition-all duration-200"
                    href={'mailto:asleyrobleto@gmail.com'}>
                    asleyrobleto@gmail.com
                </Link>
                <p className="text-lg">
                    {`I'm always down to collaborate when I have the time. I dream of becoming a great developer and one day disrupt the tech ecosystem with a cool project.`}
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
            <div className="hidden lg:flex w-[20rem] h-full justify-self-end">
                <Image className="w-full h-fit object-contain"
                    width={500} height={500} src={'/images/programming.svg'} alt="" />
            </div>
        </div>
    )
}

const ContactSection = () => {
    return (
        <section className="">
            <Container className="w-full h-full py-[5rem]">
                <SectionTag id="contact" text="CONTACT ME" />
                <Contact />
            </Container>
        </section>
    )
}

export default ContactSection
