// import { useEffect, useState } from 'react'
// import recetas from '../mocks/recetas.json'
import Aside from './Aside'
import Card from './Card'
import './main.css'
// import { getRecipes } from '../services/getRecipes'

function Main () {
  return (
    <>
    <Aside />
    <div className='main'>
      <ul className='cards'>
        <Card />
      </ul>
    </div>
    </>
  )
}
export default Main
