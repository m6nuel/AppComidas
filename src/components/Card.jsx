/* eslint-disable react/prop-types */
import './card.css'

function Card ({ recetas }) {
  return (
    <>
      {
        recetas?.map(recipe => (
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
      }
    </>
  )
}
export default Card
