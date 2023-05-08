import { PortfolioProject } from "@/app/(types)/index.types"
import { faRocket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import GithubIcon from "../icons/GithubIcon"

const ProjectButtons = ({ project }: { project: PortfolioProject }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-5`}>
            {project.url ?
                <Link href={project.url} target={'_blank'}
                    className="bg-gray-100 border font-medium border-black/40 flex gap-1 items-center justify-center py-1 hover:scale-105 duration-200 rounded">
                    <FontAwesomeIcon className="w-[1.5rem]" icon={faRocket} />
                    <p>Live demo</p>
                </Link>
                : null}
            <Link href={project.repoUrl} target={'_blank'}
                className="bg-black/90 text-gray-200 flex gap-2 items-center justify-center py-1 font-medium hover:scale-105 duration-200 rounded">
                <GithubIcon className="fill-white w-[1.2rem]" />
                <p>Github</p>
            </Link>
        </div>
    )
}

export default ProjectButtons