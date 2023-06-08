import { prisma } from "@/app/(libs)/client"

function parseUpdateRequestBody(res: any) {
    if (!res) {
        return new Response(JSON.stringify({
            error: "Bad Request"
        }), {
            status: 400
        })
    }
    let cause: any = []

    if (!res.projectId || !res.key) {

        !res.projectId ? cause.push('projectId') : null
        !res.key ? cause.push('key') : null

        if (res.key !== process.env.API_KEY) {
            return new Response(JSON.stringify({
                error: "Not Authorized.",
                cause: "This request is not authorized to perform an update action."
            }), {
                status: 401
            })
        }

        return new Response(JSON.stringify({
            error: "Bad request.",
            cause: `Missing ${cause.map((str: string) => `'${str}'`)} parameters`
        }), {
            status: 400
        })
    }
}

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

    // const editedProject = reqObject

    return new Response(JSON.stringify(editedProject), {
        status: 200
    })
}