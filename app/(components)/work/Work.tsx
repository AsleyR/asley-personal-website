import { work } from "@prisma/client";

interface WorkProps {
    work: work
}

export default function Work({ work }: WorkProps) {
    const startDate = new Date(work.start_date)
    const endDate = new Date(work.end_date)
    const dateOptions: any = { 'year': 'numeric', 'month': 'long' }

    return (
        <div className="flex flex-col gap-10 md:gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="text-xl">
                    <h2 className="font-bold text-3xl">{work.title}</h2>
                    <p className="">{work.company_name}</p>
                </div>
                <div className="md:justify-self-end text-lg font-semibold">
                    <p className="">{`${startDate.toLocaleDateString(undefined, dateOptions)} — ${endDate.toLocaleDateString(undefined, dateOptions)}`}</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-2">
                <p className="font-semibold text-xl underline">Responsabilities</p>
                <ul className="space-y-5 md:space-y-3 list-inside list-disc text-gray-700">
                    {
                        work.responsabilities.map((value, index: number) => {
                            return (
                                <li key={`${index}-responsability-work`}
                                    className="origin-bottom-left hover:scale-105 duration-300 cursor-pointer">
                                    {value}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}