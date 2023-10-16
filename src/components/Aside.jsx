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
        <span><IconFilters/> </span>
      </div>
    </>
  )
}
export default Aside
