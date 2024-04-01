export const load = async ({ params, fetch }) => {
    const { id } = params
    const response = await fetch(`/api/properties/${id}`)
    const property = await response.json()
    // console.log(id)
    return { property }
}