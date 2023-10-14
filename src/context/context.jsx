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
    try {
      getRecipes().then(data =>
        setData(prevState => ({
          ...prevState,
          initialState: data,
          recipes: data
        }))
      )
    } catch (error) {
      throw new Error(error)
    }
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
