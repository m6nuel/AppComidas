import { useId } from 'react'
import IconFilters from './Icons'
import './aside.css'
function Aside () {
  const filt = useId()
  return (
    <>
     <label className='buttonf' htmlFor={filt}>
        <IconFilters />
      </label>
      <input id={filt} type='checkbox' hidden />

      <div className='aside'>
        <IconFilters/>
      </div>

      <div className='aside-esc'>
        <h2>Filtros</h2>
      </div>
    </>
  )
}
export default Aside
