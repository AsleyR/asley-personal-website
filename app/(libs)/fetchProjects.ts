export default async function fetchProjects() {
    const baseUrl = process.env.BASE_URL
    const res = await fetch(`${baseUrl}/api/projects/get`, { "cache": "no-cache" })

    if (!res.ok) {
        return null
    }

    return res.json()
}