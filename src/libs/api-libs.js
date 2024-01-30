export const getAnimeResponse = async(resource,query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime =   await response.json()
    return anime
}

export const getMangaResponse = async(resource,query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const manga =   await response.json()
    return manga
}

export const getNestedAnimeResponse = async(resource,obejectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[obejectProperty])
}

export const reproduce = (data,gap) =>{
    const first = ~~(Math.random() * (data.length - gap) + 1)
    const last = first + gap

    const response = {
        data: data.slice(first, last)
    }

    return response
}