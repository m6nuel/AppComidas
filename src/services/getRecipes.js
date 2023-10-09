export const getRecipes = async () => {
  try {
    const data = await fetch('https://backfood-d7cg.onrender.com/recipes')
    const json = await data.json()
    return json
  } catch (error) {
    throw new Error('Error en la Api externa')
  }
}
