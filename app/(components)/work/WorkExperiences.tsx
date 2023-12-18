import { work } from "@prisma/client"
import Work from "./Work"

interface WorkExperiencesProps {
    works: work[]
}

export default function WorkExperiences({ works }: WorkExperiencesProps) {
    const orderWorks: work[] = works.sort((a, b) => {
        return a.order - b.order
    })

    return (
        <div className="flex flex-col gap-[8rem]">
            {
                orderWorks.map((work: work, index: number) => {

                    return (
                        <Work key={`${index}-work`} work={work} />
                    )
                })
            }
        </div>
    )
}