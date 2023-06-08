type CreateRequestBody = {
    key: string;
    data?: any | any[]
    title?: string;
    description?: string;
    role?: string;
    image?: string;
    repoUrl?: string;
    url?: string;
    tags?: string[]
}

/**
 * Parses request body.
 * @param res
 * @returns `Response` or `Undefined`
 */
export default function parseCreateRequestBody(res: CreateRequestBody): Response | undefined {
    if (!res) {
        return new Response(JSON.stringify({
            error: "Bad Request"
        }), {
            status: 400
        })
    }

    // Single projects object
    if (!Array.isArray(res.data)) {
        let cause: any = []

        // res.tags is not checked because it's an optional value
        if (!res.key || !res.title || !res.role || !res.description || !res.image || !res.repoUrl || !res.url) {

            !res.key ? cause.push('key') : null
            !res.title ? cause.push("title") : null
            !res.role ? cause.push('role') : null
            !res.description ? cause.push('description') : null
            !res.image ? cause.push('image') : null
            !res.repoUrl ? cause.push('repoUrl') : null
            !res.url ? cause.push('url') : null

            return new Response(JSON.stringify({
                error: "Bad request.",
                cause: `Missing ${cause.map((str: string) => `'${str}'`)} parameters`
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

    } else {
        // Multiple projects objects

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