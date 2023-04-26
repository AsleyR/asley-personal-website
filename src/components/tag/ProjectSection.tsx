import DetermineLayout from "../../lib/DetermineLayout"
import { ProjectContainerProps } from "../../lib/types/ProjectContainerProps"
import FadeEffect from "../FadeEffect"
import ProjectContainer from "../projects/ProjectContainer"


export default function ProjectSection() {
    const Projects: ProjectContainerProps[] = JSON.parse(process.env.REACT_APP_PROJECTS || '')

    return (
        <section className='grid gap-[14rem] mt-16'>
            {
                Projects.map((project: any, index: number) => {
                    const projectProp = {
                        title: project.title, role: project.role,
                        description: project.description, imagePath: project.imagePath,
                        link: project.link, repoLink: project.repoLink,
                        projectTags: project.projectTags
                    }

                    let layout = DetermineLayout(index)

                    return (
                        <FadeEffect index={index}>
                            <ProjectContainer
                                props={projectProp}
                                layout={layout}
                            />
                        </FadeEffect>
                    )
                })
            }
        </section>
    )
}
