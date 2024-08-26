import React from 'react'
import {connect} from 'react-redux'
import {buyApples } from '../redux/index'

function AppleContainer(props) {
  return (
    <div >
        <h1> number of buyApples - {props.numOfApples} </h1>
    <button onClick={props.buyApples}> BUY apple</button>
    </div>
  )
}

const mapStateToProps = state => {

  return {
    numOfApples: state.apple.numOfApples
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyApples:()=> dispatch(buyApples())
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (AppleContainer)