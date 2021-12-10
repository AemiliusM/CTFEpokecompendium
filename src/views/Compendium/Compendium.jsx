import { useState, useEffect } from 'react'
import PokemonList from '../../components/PokemonList/pokemonlist'
import SearchForm from '../../components/SearchForm/searchform'
import TypesForm from '../../components/TypesForm/TypesForm'
import {
  fetchSearchedPokeData,
  fetchInitialData,
  fetchTypeData,
  fetchTypes,
} from '../../Utils/fetchpokemon'

export default function Compendium() {
  const [loading, setLoading] = useState(true)
  const [pokemons, setPokemons] = useState([])
  const [searchName, setSearchName] = useState('')
  const [types, setTypes] = useState([])
  const [selectedType, setSelectedType] = useState('all')
  // const [pageSettings, setPageSettings] = useState('')

  // useeffctwith empty array will be the initial load with general
  // query that will populate page.

  useEffect(() => {
    const getpokemon = async () => {
      const pokeList = await fetchInitialData()
      setPokemons(pokeList)
      setLoading(false)
    }
    getpokemon()
  }, [])

  //   useeffect for getting types

  useEffect(() => {
    const getTypes = async () => {
      const typeList = await fetchTypes()
      setTypes(typeList)
    }
    getTypes()
  }, [])
  // useeffect with full array will be for any user interaction
  // I want to have it on submit but my be on change.

  useEffect(() => {
    async function getSelectedType() {
      if (selectedType !== 'all') {
        setLoading(true)
        const listOfFilteredPoke = await fetchTypeData(selectedType)
        setPokemons(listOfFilteredPoke)
        setLoading(false)
      } else {
        const pokeList = await fetchInitialData()
        setPokemons(pokeList)
        setLoading(false)
      }
    }
    getSelectedType()
  }, [selectedType])

  // useEffect(() => {
  //   const getFilteredPokemon = async () => {
  //     const filteredPokemon = await fetchData(searchName, selectedType, pageSettings)
  //     setPokemons(filteredPokemon)
  //     setLoading(false)
  //     setSearchName(searchName)
  //     setSelectedType(selectedType)
  //     setPageSettings(pageSettings)
  //   }
  //   getFilteredPokemon()
  // }, [searchName, selectedType, pageSettings])

  const handleSubmit = (event) => {
    event.preventDefault()
    setLoading(true)
    fetchSearchedPokeData(searchName, selectedType).then((searchPokemons) => {
      setPokemons(searchPokemons)
      setSelectedType(selectedType)
      setSearchName('')
      setLoading(false)
    })
  }

  return (
    <div>
      <TypesForm types={types} selectedType={selectedType} handleChanges={setSelectedType} />
      <SearchForm name={searchName} handleSubmit={handleSubmit} handleNameChange={setSearchName} />
      {loading ? <h1>loading pokemon</h1> : <PokemonList pokemons={pokemons} />}
    </div>
  )
}
