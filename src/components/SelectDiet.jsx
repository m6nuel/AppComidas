import { useId } from 'react'
import { useFilter } from '../hooks/useFilter'

export function SelectDiet () {
  const tDiet = useId()
  const { filterByDiet } = useFilter()

  const handleChange = (e) => {
    filterByDiet(e.target.value)
  }

  return (
    <>
      <label htmlFor={tDiet}>Tipo de Dieta: </label>
        <select onChange={handleChange} id={tDiet}>
          <option value="all">Todas</option>
          <option value="vegan">Vegano</option>
          <option value="gluten free">gluten free</option>
          <option value="dairy free">dairy free</option>
          <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
          <option value="paleolithic">paleolithic</option>
          <option value="primal">primal</option>
          <option value="whole 30">whole 30</option>
          <option value="pescatarian">pescatarian</option>
          <option value="fodmap friendly">fodmap friendly</option>
        </select>
    </>
  )
}
