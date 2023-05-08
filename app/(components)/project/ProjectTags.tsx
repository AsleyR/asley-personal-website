import { PortfolioProject } from "@/app/(types)/index.types"

const ProjectTags = ({ tags }: { tags: PortfolioProject['tags'] }) => {
    return (
        <ul className="flex flex-row flex-wrap gap-2">
            {
                tags.map((tag, index) => {
                    return (
                        <li key={`${tag}-tag-${index}`} className="px-4 rounded-full bg-gray-200 hover:bg-gray-300 duration-200 text-gray-600  cursor-default">
                            {tag}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ProjectTags