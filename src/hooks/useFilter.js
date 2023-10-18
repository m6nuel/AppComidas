import { useContext } from 'react'
import { RecipesContext } from '../context/context'

export function useFilter () {
  const { data, setData } = useContext(RecipesContext)

  const filterByDiet = (dieta) => {
    const { initialState } = data
    if (dieta === 'all') {
      return setData(prevState => ({
        ...prevState,
        recipes: initialState
      }))
    }

    const diets = initialState.filter(receta => receta.Types.some(t => t.name === dieta))
    setData(prevState => ({
      ...prevState,
      recipes: diets
    }))
    return diets
  }

  return { filterByDiet }
}
