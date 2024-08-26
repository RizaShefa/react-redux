import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyIceCream} from '../redux/icecream/iceCreamActions'
function IceCreamHookCContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
 const dispatch=  useDispatch()
    return (
    <div>
        <h1>Number of icerea, - {numOfIceCream} </h1>
        <button onClick={()=> dispatch(buyIceCream())}> Buy cake</button>
    </div>
  )
}

export default IceCreamHookCContainer