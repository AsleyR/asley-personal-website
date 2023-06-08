import parseCreateRequestBody from "@/app/(libs)/api/parseCreateRequest"
import { prisma } from "@/app/(libs)/client"

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url)
    const ammount = searchParams.get('ammount') || "single"
    const res = await request.json().catch(err => null)

    let newProject: any = []
    let reqObject: any = []
    let parseResult: any = {}

    switch (ammount) {
        case "single":
            if (Array.isArray(res)) {
                parseResult = new Response(JSON.stringify({
                    error: "Bad Request",
                    cause: "Request body is an array.",
                    solution: "Request body cannot be an array."
                }), {
                    status: 400
                })

                return parseResult
            }

            parseResult = parseCreateRequestBody(res)

            if (parseResult instanceof Response) {
                return parseResult
            }

            reqObject = {
                "title": res.title,
                "role": res.role,
                "description": res.description,
                "image": res.image,
                "repoUrl": res.repoUrl,
                "url": res.url
            }

            if (res.tags) {
                reqObject = {
                    ...reqObject,
                    "tags": res.tags
                }
            }

            if (res.url) {
                reqObject = {
                    ...reqObject,
                    "url": res.url
                }
            }

            newProject = await prisma.projects.create({
                "data": reqObject
            }).catch(error => error)

            break;

        case "many":
            if (!Array.isArray(res.data)) {
                parseResult = new Response(JSON.stringify({
                    error: "Bad Request",
                    cause: "Request body is not an array.",
                    solution: "Request body should be an array."
                }), {
                    status: 400
                })

                return parseResult
            }

            parseResult = parseCreateRequestBody(res)

            if (parseResult !== undefined) {
                return parseResult
            }

            res.data.map((res: any) => {
                let newReqObject: any = {
                    "title": res.title,
                    "role": res.role,
                    "description": res.description,
                    "image": res.image,
                    "repoUrl": res.repoUrl,
                    "url": res.url
                }

                if (res.tags) {
                    newReqObject = {
                        ...newReqObject,
                        "tags": res.tags
                    }
                }

                if (res.url) {
                    newReqObject = {
                        ...newReqObject,
                        "url": res.url
                    }
                }

                reqObject.push(newReqObject)
            })

            newProject = await prisma.projects.createMany({
                "data": reqObject
            }).catch(error => error)

            break;

        default:
            return parseResult = new Response(JSON.stringify({
                error: "Bad request.",
                cause: `Wrong value of search param 'ammount'`,
                solution: `search param 'ammount' can only be 'single' or 'many'.`
            }), {
                status: 400
            })
    }

    return new Response(JSON.stringify(newProject), {
        status: 200
    })
}