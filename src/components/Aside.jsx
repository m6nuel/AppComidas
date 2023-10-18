import { useId } from 'react'
import IconFilters from './Icons'
import './aside.css'
import { SelectDiet } from './SelectDiet'

function Aside () {
  const filt = useId()

  return (
    <>
     <label className='buttonf' htmlFor={filt}>
        <IconFilters />
      </label>
      <input id={filt} type='checkbox' hidden />

      <div className='aside'>
      <SelectDiet />
      </div>

      <div className='aside-esc'>
        <SelectDiet />
      </div>
    </>
  )
}
export default Aside
