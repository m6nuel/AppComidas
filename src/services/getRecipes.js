export const getRecipes = async (name) => {
  if (name === '') return

  if (name) {
    try {
      const data = await fetch(`https://backfood-d7cg.onrender.com/recipes?name=${name}`)
      const json = await data.json()
      if (json.length > 0) {
        return json
      } else {
        return 'No se encontro la receta'
      }
    } catch (error) {
      throw new Error('Error en la Api externa')
    }
  }

  try {
    const data = await fetch('https://backfood-d7cg.onrender.com/recipes')
    const json = await data.json()
    return json
  } catch (error) {
    throw new Error('Error en la Api externa')
  }
}
