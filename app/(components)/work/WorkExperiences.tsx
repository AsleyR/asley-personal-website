import { work } from "@prisma/client"
import Work from "./Work"

interface WorkExperiencesProps {
    works: work[]
}

export default function WorkExperiences({ works }: WorkExperiencesProps) {
    return (
        <div className="flex flex-col gap-[8rem]">
            {
                works.map((work: any, index: number) => {
                    return (
                        <Work key={`${index}-work`} work={work} />
                    )
                })
            }
        </div>
    )
}