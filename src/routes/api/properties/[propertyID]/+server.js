import { json } from '@sveltejs/kit'
import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

export const GET = async ({ params }) => {
    const getProperty = await db.property.findUnique({
        where: {
            id: Number(params.propertyID)
        }
    })

    return json(getProperty)
}