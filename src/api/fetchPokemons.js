import axios from "axios";

export const baseUrl = 'https://pokeapi.co/api/v2/'


export const fetchPokemons = async (from, till) => {

  const result = []

  for (let i = from; i <= till; i++) {
    const data = await axios.get(baseUrl + 'pokemon/' + i)
    result.push(data.data)
  }
  return result

}
