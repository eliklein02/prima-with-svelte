import { PrismaClient } from "@prisma/client";
const db = new PrismaClient()

// const addProperty = {
//     address: '26-30 Main Street, Toms River, NJ',
//     city: 'Toms River',
//     state: 'New Jersey'
// }

async function main() {
//     const newProperty = await db.property.create({
//         data: {
//             address: addProperty.address,
//             city: addProperty.city,
//             state: addProperty.state,
//             imageUrl: 'src/img/1723main.jpg'
//         }
//     })
}

main()