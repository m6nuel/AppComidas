import './card.css'
import { useContext } from 'react'
import { RecipesContext } from '../context/context'

function Card () {
  const { data } = useContext(RecipesContext)
  return (
    <>
      {
        data.recipes.length === 0
          ? <span>Cargando...</span>
          : (
              data.recipes === 'No se encontro la receta'
                ? <span>{data.recipes}</span>
                : data.recipes?.map(recipe => (
                  <li className='card' key={recipe.id}>
                    <div>
                      <img src={recipe.img} alt={recipe.name} />
                      <h4>{recipe.name}</h4>
                      <div className='diets'>
                        <ul>
                          {
                            recipe.Types?.map(diet => (
                              <li key={diet.id}>{diet.name}</li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </li>
                ))
            )
      }
    </>
  )
}
export default Card
