/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { getRecipes } from '../services/getRecipes'

export const RecipesContext = createContext()

export function RecipesProviders ({ children }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    initialState: [],
    recipes: []
  })

  useEffect(() => {
    setLoading(true)
    getRecipes()
      .then(data => setData(prevState => ({
        ...prevState,
        initialState: data,
        recipes: data
      })))
    setLoading(false)
  }, [])

  return (
    <RecipesContext.Provider
      value={{
        data,
        setData,
        loading
      }}
    >
      {children}
    </RecipesContext.Provider>
  )
}
