export const fetchData = async (postfix) => {
    const response = await fetch(`https://thronesapi.com/api/v2/${postfix}`)
    const data = response.json()
    return await data;
}
