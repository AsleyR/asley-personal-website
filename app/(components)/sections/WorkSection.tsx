import { work } from "@prisma/client";
import SectionTag from "../SectionTag";
import WorkExperiences from "../work/WorkExperiences";

interface WorkSectionProps {
    works: work[]
}

export default function WorkSection({ works }: WorkSectionProps) {
    return (
        <div className="my-[5rem]">
            <SectionTag id="work" text="PROFESSIONAL EXPERIENCE" />
            <WorkExperiences works={works} />
        </div>
    )
}