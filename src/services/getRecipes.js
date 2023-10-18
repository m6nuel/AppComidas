export const getRecipes = async (name) => {
  if (name === '') return

  if (name) {
    try {
      const data = await fetch(`https://backfood-nxl1.onrender.com/recipes?name=${name}`)
      const json = await data.json()
      if (json.length > 0) {
        return json
      } else {
        return 'No se encontro la receta'
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }

  try {
    const data = await fetch('https://backfood-nxl1.onrender.com/recipes/')
    const json = await data.json()
    return json
  } catch (error) {
    throw new Error(error.message)
  }
}
