import { prisma } from "@/app/(libs)/client";

export default async function getAllProjects() {
    const projects = await prisma.projects.findMany()
    return projects
}