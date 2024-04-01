export const load = async ({ fetch }) => {
    const response = await fetch('/api/properties')
    const properties = await response.json()
    // console.log(properties)
    return { properties }
}