export default function SearchForm({ name, handleSubmit, handleNameChange }) {
  return (
    <form aria-label="searchform" onSubmit={handleSubmit}>
      <h1>Search for a pokemon</h1>
      <label htmlFor="pokename">Name:</label>
      <input
        id="pokename"
        name="name"
        type="text"
        onChange={(e) => handleNameChange(e.target.value)}
        value={name}
      />
      <button type="submit">Search!</button>
    </form>
  )
}
