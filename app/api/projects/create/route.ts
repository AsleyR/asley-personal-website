import { prisma } from "@/app/(libs)/client"

type CreateRequestBody = {
    key: string;
    data: any | any[]
}

/**
 * Parses request body.
 * @param res
 * @returns `Response` or `Undefined`
 */
function parseCreateRequestBody(res: CreateRequestBody): Response | undefined {
    if (!res) {
        return new Response(JSON.stringify({
            error: "Bad Request"
        }), {
            status: 400
        })
    }


    if (!Array.isArray(res.data)) {
        let cause: any = []

        // res.tags is not checked because it's an optional value
        if (!res.key || !res.data.title || !res.data.role || !res.data.description || !res.data.image || !res.data.repoUrl || !res.data.url) {

            !res.key ? cause.push('key') : null
            console.log(res)
            !res.data.title ? cause.push("title") : null
            !res.data.role ? cause.push('role') : null
            !res.data.description ? cause.push('description') : null
            !res.data.image ? cause.push('image') : null
            !res.data.repoUrl ? cause.push('repoUrl') : null
            !res.data.url ? cause.push('url') : null

            if (res.key !== process.env.API_KEY) {
                return new Response(JSON.stringify({
                    error: "Not Authorized.",
                    cause: "This request is not authorized to perform a create action."
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
    } else {
        let parsedCause: any = []

        if (!res.key) {
            return new Response(JSON.stringify({
                error: "Bad request.",
                cause: "Missing 'key' parameters"
            }), {
                status: 400
            })
        }

        if (res.key !== process.env.API_KEY) {
            return new Response(JSON.stringify({
                error: "Not Authorized.",
                cause: "This request is not authorized to perform a create action."
            }), {
                status: 401
            })
        }

        res.data.map((res: any, index: number) => {
            let cause: any = []

            // res.tags is not checked because it's an optional value
            if (!res.title || !res.role || !res.description || !res.image || !res.repoUrl) {

                !res.title ? cause.push("title") : null
                !res.role ? cause.push('role') : null
                !res.description ? cause.push('description') : null
                !res.image ? cause.push('image') : null
                !res.repoUrl ? cause.push('repoUrl') : null
                // !res.url ? cause.push('url') : null

                const result = {
                    position: index,
                    cause: `Missing ${cause.map((str: string) => `'${str}'`)} parameters`,
                }
                cause = []

                parsedCause.push(result)
            }

        })

        // Map through the array and checks if each value equals to undefined,
        // and returns result into new array.
        // Then, it checks if the values of the new array are equal to false
        const areErrorsPresent = parsedCause.map((value: any) => {
            return value !== undefined
        }).every((value: any) => value === false)

        if (parsedCause.length !== 0 && !areErrorsPresent) {
            return new Response(JSON.stringify({
                error: "Bad request.",
                cause: parsedCause
            }), {
                status: 400
            })
        }

    }
}

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

    // newProject = reqObject

    return new Response(JSON.stringify(newProject), {
        status: 200
    })
}