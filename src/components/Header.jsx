import { useContext, useEffect, useId, useState } from 'react'
import './header.css'
import { getRecipes } from '../services/getRecipes'
import { RecipesContext } from '../context/context'

function useSearch () {
  const { setData } = useContext(RecipesContext)
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (search === '') return

    if (search.length < 3) {
      setError('debe tener mas de 3 caracteres!')
      return
    }

    setError(null)
  }, [search])

  const getRecipeByName = (search) => {
    const buscado = getRecipes(search)
    return buscado.then(data => setData(preState => ({
      ...preState,
      recipes: data
    })))
  }

  return { search, setSearch, error, getRecipeByName }
}

function Header () {
  const idSearch = useId()
  const { setSearch, search, getRecipeByName, error } = useSearch()

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
    </div>
  )
}
export default Header
