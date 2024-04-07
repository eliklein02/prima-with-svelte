export async function handle({ event, resolve }) {
    if (event.cookies.get('session')) {
        event.locals.auth = true
    }

    return await resolve(event)
}