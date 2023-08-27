export default async function fetchWorks() {
    const baseUrl = process.env.BASE_URL
    const res = await fetch(`${baseUrl}/api/work/get`, { "cache": "no-cache" })

    if (!res.ok) {
        return null
    }

    return res.json()
}