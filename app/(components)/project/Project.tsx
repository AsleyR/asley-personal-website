import { PortfolioProject } from "@/app/(types)/index.types"
import Image from "next/image"
import Link from "next/link"
import ProjectContent from "./ProjectContent"

const Project = ({ project, direction }: { project: PortfolioProject, direction?: "left" | "right" }) => {
    if (!direction) {
        direction = "left"
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
            <Link className={`${direction === 'left' ? "order-first" : "order-first lg:order-last"} h-min shadow-box-xl hover:scale-105 transition-all duration-300 cursor-pointer`}
                href={project.url || project.repoUrl} target={'_blank'} >
                <Image
                    className='w-full h-full rounded-lg border'
                    width={800} height={800}
                    priority
                    src={project.image} alt={`${project.title} project photo`} />
            </Link>
            <ProjectContent project={project} />
        </div>
    )
}

export default Project