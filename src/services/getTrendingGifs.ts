const URL = 'https://api.giphy.com/v1/gifs/trending'
const API_KEY = process.env.REACT_APP_API_KEY

export const getTrendingGifs = async () => {
  const response = await fetch(`${URL}?api_key=${API_KEY}&limit=10`)
  const { data } = await response.json()
  return data
}