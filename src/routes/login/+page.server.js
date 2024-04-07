import { PrismaClient } from '@prisma/client'
import { fail, redirect } from '@sveltejs/kit'
const prisma = new PrismaClient()

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData()
        const username = data.get('username')
        const password = data.get('password')

        const user = await prisma.user.findFirst({
            where: {
                username
            }
        })

        if (!user) {
            return fail(400, { invalid: true })
        }

        if (user.password !== password) {
            return fail(400, { invalid: true })
        }

        cookies.set('session', user.userAuthToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30 * 12,
        })

        throw redirect(307, '/admin')
    }
}