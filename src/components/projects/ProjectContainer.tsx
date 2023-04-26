import { ProjectContainerProps } from "../../lib/types/ProjectContainerProps";
import ProjectTags from "../tag/ProjectTags";

interface IProps {
    props: ProjectContainerProps;
    layout: "left" | "right"
}

export default function ProjectContainer({ props, layout }: IProps) {
    const projectLink = props.link || props.repoLink

    return (
        <article className='grid grid-cols-1 items-center md:grid-cols-2 gap-10 lg:gap-28 transition-all'>
            <section className='grid gap-5'>
                <div className='flex'>
                    <h1 className='text-3xl lg:text-4xl hover:scale-105 origin-bottom-left transition-all font-bold'>
                        <a className='hover:text-gray-600 transition-all' href={projectLink} target={'_blank'} rel='noreferrer'>{props.title}</a>
                    </h1>
                </div>
                <p className='pr-0 sm:pr-[8rem] md:pr-0 text-xl leading-8 text-[#888888]'>{props.description}</p>
                <section>
                    <ProjectTags tags={props.projectTags} />
                </section>
            </section>
            <a className={`${layout === "left" ? "order-first md:order-none" : "order-first md:order-second"}`} href={projectLink} target={'_blank'} rel='noreferrer'>
                <img className='block max-w-full h-auto object-cover shadow-xl cursor-pointer hover:scale-105 rounded-lg duration-500 transition-all'
                    src={props.imagePath} alt='Data Visualizer Logo'></img>
            </a>
        </article>
    )
}
