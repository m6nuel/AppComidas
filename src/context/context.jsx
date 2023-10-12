/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { getRecipes } from '../services/getRecipes'

export const RecipesContext = createContext()

export function RecipesProviders ({ children }) {
  const [data, setData] = useState({
    initialState: [],
    recipes: []
  })

  useEffect(() => {
    getRecipes()
      .then(data => setData(prevState => ({
        ...prevState,
        initialState: data,
        recipes: data
      })))
  }, [])

  return (
    <RecipesContext.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </RecipesContext.Provider>
  )
}
