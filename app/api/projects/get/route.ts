import { prisma } from "@/app/(libs)/client"

export async function GET(request: Request) {
    const reqObject = {}
    const projects = await prisma.projects.findMany(reqObject).catch(error => error)

    return new Response(JSON.stringify(projects), {
        status: 200
    })
}