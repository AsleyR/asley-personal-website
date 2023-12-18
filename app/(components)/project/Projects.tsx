import { ProjectsProps } from "@/app/(types)/index.types"
import Project from './Project'

export default function Projects({ projects }: ProjectsProps) {

    const orderedProjects = projects.sort((a, b) => {
        return a.order - b.order
    })

    return (
        <div className="flex flex-col gap-[8rem]">
            {
                orderedProjects.map((project: any, index: number) => {
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
