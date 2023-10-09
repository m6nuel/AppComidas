import recetas from '../mocks/recetas.json'
import Card from './Card'
import './main.css'

function Main () {
  return (
    <div className='main'>
      <ul className='cards'>
        <Card recetas={recetas} />
      </ul>
    </div>
  )
}
export default Main
