import { prisma } from "@/app/(libs)/client";

export default async function getAllWorks() {
    const works = await prisma.work.findMany()
    return works
}