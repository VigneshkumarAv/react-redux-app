import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icecreamActions } from './icecreamSlice'
const IcecreamView = () => {
const [value, setValue] = useState(1)
  const dispatch = useDispatch()
  const numOfIcecreams = useSelector((state)=> state.icecream.numOfIcecreams)
  return (
    <div>
      <h2>Number Of Icecreams - {numOfIcecreams}</h2>
        <button onClick={()=>{dispatch(icecreamActions.ordered())}}>Order Icecream</button>
        <input type="number" value={value} onChange={(e)=>{setValue(parseInt(e.target.value))}}/>
        <button onClick={()=>{dispatch(icecreamActions.restocked(value))}}>Restock Icecreams</button>
    </div>
  )
}

export default IcecreamView
