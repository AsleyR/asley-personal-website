import PortfolioProjects from '../../../public/data/Projects.json' assert { type: "json" }
import { PortfolioProject } from "@/app/(types)/index.types"
import Project from './Project'

const projects = JSON.parse(JSON.stringify(PortfolioProjects))

const Projects = () => {
    return (
        <div className="flex flex-col gap-[8rem]">
            {
                projects.map((project: PortfolioProject, index: number) => {
                    return (
                        <Project key={`${project.title} project`}
                            project={project}
                            direction={index % 2 === 0 ? "left" : "right"}
                        />
                    )
                })
            }
        </div>
    )
}

export default Projects
