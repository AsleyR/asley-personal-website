export default function parseDeleteRequestBody(res: any) {
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
            cause: "This request is not authorized to perform an update action."
        }), {
            status: 401
        })
    }
}