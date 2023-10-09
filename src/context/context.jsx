/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { getRecipes } from '../services/getRecipes'

export const RecipesContext = createContext()

export function RecipesProviders ({ children }) {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes().then(data => setRecipes(data))
  }, [])
  return (
    <RecipesContext.Provider
      value={recipes}
    >
      {children}
    </RecipesContext.Provider>
  )
}
