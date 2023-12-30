
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/MatheusSPedrosa/portfolio-web/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}