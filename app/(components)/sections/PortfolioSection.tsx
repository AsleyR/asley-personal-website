import Projects from "../project/Projects"
import SectionTag from "../SectionTag"

const PortfolioSection = () => {
    return (
        <div className="my-[5rem]">
            <SectionTag id="work" text="FEATURE PROJECTS" />
            <Projects />
        </div>
    )
}

export default PortfolioSection
