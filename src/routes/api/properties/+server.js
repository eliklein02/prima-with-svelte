import { PrismaClient } from "@prisma/client"
const db = new PrismaClient()
import { redirect } from "@sveltejs/kit"



export const GET = async ({ params }) => {
    if (params.id) {
        const property = await db.property.findUnique({
            where: { id: Number(params.id) },
        });
        return new Response(JSON.stringify(property));
    } else {
        const properties = await db.property.findMany();
        return new Response(JSON.stringify(properties));
    }
}