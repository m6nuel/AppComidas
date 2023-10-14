import './card.css'
import { useContext } from 'react'
import { RecipesContext } from '../context/context'
import cargando from '../mocks/loading.jpg'

function Card () {
  const { data } = useContext(RecipesContext)
  return (
    <>
      {
        data.recipes.length > 0
          ? data.recipes?.map(recipe => (
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
          : <li className='card' key='Not-found'>
              <div>
                <img src={cargando} alt='No-found' />
                <h4>Receta no encontrada</h4>
              </div>
        </li>
          // <h1>Cargando...</h1>
      }
    </>
  )
}
export default Card
