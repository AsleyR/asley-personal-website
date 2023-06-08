import { projects } from "@prisma/client"
import Projects from "../project/Projects"
import SectionTag from "../SectionTag"

const PortfolioSection = ({ projects }: { projects: projects[] }) => {
    return (
        <div className="my-[5rem]">
            <SectionTag id="work" text="FEATURE PROJECTS" />
            <Projects projects={projects} />
        </div>
    )
}

export default PortfolioSection
