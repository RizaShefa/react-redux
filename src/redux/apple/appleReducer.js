import { BUY_APPLES } from "./appleTypes"

const initalState ={
    numOfApples :10
}
 const appleReducer= (state =initalState ,action)=>{

switch (action.type) {
    case BUY_APPLES :return {
        ...state,
        numOfApples:state.numOfApples-1
    }

    default: return state

}

}

export default appleReducer;