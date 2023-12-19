import { PortfolioProject } from "@/app/(types)/index.types"
import ProjectTags from "./ProjectTags"
import ProjectButtons from "./ProjectButtons"

const ProjectContent = ({ project }: { project: PortfolioProject }) => {
    return (
        <div className="flex flex-col gap-3">
            <div className="">
                <h2 className='font-bold text-3xl'>{project.title}</h2>
                <span className='italic'>{project.role}</span>
            </div>
            <p className='text-lg'>{project.description}</p>
            <div className="flex my-[1rem]">
                <ProjectTags tags={project.tags} />
            </div>
            <ProjectButtons project={project} />
        </div>
    )
}

export default ProjectContent