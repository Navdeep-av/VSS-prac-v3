export const getData = async(url) =>{

    const fetchUrl = await fetch(url)
    const parsedData = await fetchUrl.json()
    return parsedData

}