// This is where the pokemon will be rendered - includes a pic, name, type(s), and abilities - 5 total
export default function Pokemon({
  name,
  type1,
  type2,
  image,
  ability1,
  ability2,
  hp,
  attack,
  defense,
}) {
  return (
    <section className="pokemon">
      <h1>Pokemon: {name}</h1>
      <h2>Type 1: {type1}</h2>
      <h2>Type 2: {type2}</h2>
      <img src={image}></img>
      <h2>Ability 1: {ability1}</h2>
      <h2>Ability 2: {ability2}</h2>
      <h2>HP: {hp}</h2>
      <h2>Attack: {attack}</h2>
      <h2>Defense: {defense}</h2>
    </section>
  )
}
