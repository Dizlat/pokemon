import axios from "axios";

export const baseUrl = 'https://pokeapi.co/api/v2/'


export const fetchPokemonByName =async (name) => {

  const {data} = await axios.get(baseUrl + 'pokemon/' + name)
  return data
}
