import { useContext, useEffect, useRef, useState } from 'react'
import { RecipesContext } from '../context/context'
import { getRecipes } from '../services/getRecipes'

export function useSearch () {
  const { setData } = useContext(RecipesContext)
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const isFirtsInput = useRef(true)

  useEffect(() => {
    if (isFirtsInput.current) {
      isFirtsInput.current = search === ''
      return
    }

    if (search === '') return

    if (search.length < 3) {
      setError('debe tener mas de 3 caracteres!')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar receta con un numero')
      return
    }

    setError(null)
  }, [search])

  const getRecipeByName = async (search) => {
    try {
      setLoading(true)
      const buscado = await getRecipes(search)
      if (buscado.message === 'Recipes not found') {
        console.log(buscado.message)
        return {
          name: 'no se encontro receta'
        }
      }
      setData(prevState => ({
        ...prevState,
        recipes: buscado
      }))
      setLoading(false)
      return buscado
    } catch (error) {
      setLoading(false)
      throw new Error(error)
    }
  }

  const handleReset = () => {
    return setData(prevState => ({
      ...prevState,
      recipes: prevState.initialState
    }))
  }

  return { search, setSearch, error, getRecipeByName, handleReset, loading }
}
