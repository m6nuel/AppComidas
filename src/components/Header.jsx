import { useId } from 'react'
import './header.css'
import { useSearch } from '../hooks/useSearch'

function Header () {
  const idSearch = useId()
  const { setSearch, search, getRecipeByName, error, handleReset } = useSearch()

  const handleChange = (e) => {
    const search = e.target.value
    setSearch(search)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getRecipeByName(search)
    setSearch('')
  }

  return (
    <div className='header'>
      <form onSubmit={handleSubmit}>
        <label htmlFor={idSearch}>Buscar: </label>
        <input
          id={idSearch}
          placeholder='Buscar Receta'
          onChange={handleChange}
          value={search}
        />
        <button type='submit'>Buscar</button>
      </form>
      <span>{error}</span>
      <button onClick={handleReset}>Reset List</button>
    </div>
  )
}
export default Header
