import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux/index'

function IceCreamContainer(props) {
  return (
    <div >
        <h1> number of Ice Cream - {props.numOfIceCream} </h1>
    <button onClick={props.buyIceCream}> BUY Ice Cream</button>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    numOfIceCream: state.iceCream.numOfIceCream
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream:()=> dispatch(buyIceCream())
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainer)