export default function TypesForm({ types, selectedType, handleChanges }) {
  return (
    <div>
      <h1>Select a type</h1>
      <select onChange={(e) => handleChanges(e.target.value)} value={selectedType}>
        <option key="all-types" value="all">
          All
        </option>
        {types.map(({ type }) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  )
}
