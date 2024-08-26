import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from '../redux/cakes/cakeActions'
function HockCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfIceCream)
 const dispatch=  useDispatch()
    return (
    <div>
        <h1>Number of Cafdfdfdfdkes - {numOfCakes} </h1>
        <button onClick={()=> dispatch(buyCake())}> Buy cake</button>
    </div>
  )
}

export default HockCakeContainer