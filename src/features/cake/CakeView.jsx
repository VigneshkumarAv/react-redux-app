import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { cakeActions } from './cakeSlice'

const CakeView = () => {
  const numOfCakes = useSelector((state)=> state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number Of Cakes - {numOfCakes}</h2>
        <button onClick={()=>{dispatch(cakeActions.ordered())}}>Order Cake</button>
        <button onClick={()=>{dispatch(cakeActions.restocked(5))}}>Restock Cakes</button>
    </div>
  )
}

export default CakeView
