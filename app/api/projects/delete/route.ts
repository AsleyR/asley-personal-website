import parseDeleteRequestBody from "@/app/(libs)/api/parseDeleteRequest"
import { prisma } from "@/app/(libs)/client"

export async function POST(request: Request) {
    const res = await request.json().catch(err => null)

    const parsedResult = parseDeleteRequestBody(res)

    if (parsedResult instanceof Response) {
        return parsedResult
    }

    const deletedProject = await prisma.projects.delete({
        "where": {
            "id": res.projectId
        }
    }).catch(err => err)

    return new Response(JSON.stringify(deletedProject), {
        status: 200
    })
}