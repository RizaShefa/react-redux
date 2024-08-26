import { buyIceCream } from "./iceCreamActions"

const initalState ={
    numOfIceCream :10
}
 const iceCreamReducer= (state =initalState ,action)=>{

switch (action.type) {
    case buyIceCream :return {
        ...state,
        numOfIceCream:state.numOfIceCream+1
    }

    default: return state

}

}

export default iceCreamReducer;