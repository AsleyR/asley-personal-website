import parseUpdateRequestBody from "@/app/(libs)/api/parseUpdateRequest"
import { prisma } from "@/app/(libs)/client"

export async function POST(request: Request) {
    const res = await request.json().catch(err => null)
    let reqObject = {}


    const parsedResult = parseUpdateRequestBody(res)

    if (parsedResult instanceof Response) {
        return parsedResult
    }

    if (res.title) {
        reqObject = {
            ...reqObject,
            "title": res.title
        }
    }

    if (res.role) {
        reqObject = {
            ...reqObject,
            "role": res.role
        }
    }

    if (res.description) {
        reqObject = {
            ...reqObject,
            "description": res.description
        }
    }

    if (res.image) {
        reqObject = {
            ...reqObject,
            "image": res.image
        }
    }

    if (res.repoUrl) {
        reqObject = {
            ...reqObject,
            "repoUrl": res.repoUrl
        }
    }

    if (res.url) {
        reqObject = {
            ...reqObject,
            "url": res.url
        }
    }

    if (res.tags) {
        reqObject = {
            ...reqObject,
            "tags": res.tags
        }
    }

    const editedProject = await prisma.projects.update({
        "where": {
            "id": res.projectId
        },
        "data": reqObject
    }).catch(err => err)

    return new Response(JSON.stringify(editedProject), {
        status: 200
    })
}