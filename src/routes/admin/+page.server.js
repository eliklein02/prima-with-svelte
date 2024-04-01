import { PrismaClient } from '@prisma/client';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: "da2xsrb3n",
    api_key: "527745228873564",
    api_secret: "SY64xNTVN_jihjAA98nJMvqyZlU",
    secure: true
});


const db = new PrismaClient()



export const load = async () => {
    return {
        properties: await db.property.findMany()
    }
}

export const actions = {
    addProperty: async ({ request }) => {
        try {
            const formData = await request.formData();
            const fileData = formData.get('file');
            const arrayBuffer = await fileData.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);

            const uploadStream = await new Promise((resolve, reject) => {
                cloudinary.uploader
                    .upload_stream({}, function (error, result) {
                        if (error) {
                            return reject(error);
                        }
                        return resolve(result);
                    })
                    .end(buffer);
            });

            console.log(uploadStream.url);

            const { address, city, state, url, website } = Object.fromEntries(formData.entries());
            console.log(website)
            await db.property.create({
                data: {
                    address, city, state, imageUrl: uploadStream.url, url, website
                }
            });

            return {
                success: true,
                image: uploadStream.url,
            };
        } catch (err) {
            console.error(err);
            return { status: 500, body: { message: 'Failed to create property' } };
        }
    },

    deleteProperty: async ({ url }) => {
        const id = url.searchParams.get('id')
        if (!id) {
            return fail(400, { message: 'Invalid id' })
        }

        try {
            await db.property.delete({
                where: {
                    id: Number(id)
                }
            })
        } catch (err) {
            console.error(err)
            return fail(500, { message: 'Failed to delete property' })
        }

        return redirect(303, '/admin')
    },

};