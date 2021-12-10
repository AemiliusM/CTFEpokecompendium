import Pokemon from '../Pokemon/pokemon'

// This is where the list of pokemon will be rendered will need to map through pokemon and pass down data
function PokemonList({ pokemons }) {
  return (
    <ul aria-label="pokemonList" className="pokemonList">
      {pokemons.map((pokemon) => {
        return (
          <li className="pokeItem" key={pokemon.id}>
            <Pokemon
              name={pokemon.pokemon}
              type1={pokemon.type_1}
              type2={pokemon.type_2}
              image={pokemon.url_image}
              ability1={pokemon.ability_1}
              ability2={pokemon.ability_2}
              hp={pokemon.hp}
              attack={pokemon.attack}
              defense={pokemon.defense}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default PokemonList
