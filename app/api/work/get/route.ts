import { prisma } from "@/app/(libs)/client"

export async function GET(request: Request) {
    const reqObject = {}
    const works = await prisma.work.findMany(reqObject).catch(error => error)

    return new Response(JSON.stringify(works), {
        status: 200
    })
}