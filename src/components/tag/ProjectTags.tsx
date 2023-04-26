import { ProjectContainerProps } from "../../lib/types/ProjectContainerProps"
import ProjectTag from "./ProjectTag"

export default function ProjectTags({ tags }: { tags: ProjectContainerProps['projectTags'] }) {
    if (tags !== undefined && tags.length !== 0) {
        return (
            <ul className='flex flex-row flex-wrap gap-3'>
                {
                    tags.map((tag) => {
                        return (
                            <ProjectTag text={tag} />
                        )
                    })
                }
            </ul>
        )
    } else {
        return <></>
    }
}