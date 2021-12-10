export async function fetchInitialData() {
  const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex'
  const res = await fetch(url)
  const results = await res.json()
  return results.results
}
export async function fetchTypeData(selectedType) {
  if (selectedType === 'all') {
    await fetchInitialData()
  } else {
    const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${selectedType}`
    const res = await fetch(url)
    const results = await res.json()
    return results.results
  }
}

export async function fetchSearchedPokeData(searchName, selectedType) {
  if (searchName === undefined) {
    const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex?type=${selectedType}`
    const res = await fetch(url)
    const results = await res.json()
    return results.results
  }
  if (selectedType === 'all') {
    const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${searchName}`
    const res = await fetch(url)
    const results = await res.json()
    return results.results
  }
  if (selectedType === 'all' && searchName === '') {
    const url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex'
    const res = await fetch(url)
    const results = await res.json()
    return results.results
  } else {
    const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${searchName}&type=${selectedType}`
    const res = await fetch(url)
    const results = await res.json()
    return results.results
  }
}

// export async function fetchData(searchName, selectedType) {
//   let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex'
//   let params = new URLSearchParams()
//   if (searchName) {
//     params.set('pokemon', searchName)
//   }
//   if (selectedType) {
//     console.log(selectedType)
//     params.set('type', selectedType)
//   }
//   // if (direction) {
//   //   params.set('direction', direction)
//   //   params.set('sort', 'pokemon')
//   // }
//   // if (page) {
//   //   params.set('page', page)
//   // }
//   url = `${url}?${params.toString()}`
//   // console.log(url, 'URL')
//   let response = await fetch(url)
//   let results = await response.json()
//   return results.results
// }

export const fetchTypes = async () => {
  const res = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex/types`)

  const pokemonTypes = await res.json()
  return pokemonTypes
}
