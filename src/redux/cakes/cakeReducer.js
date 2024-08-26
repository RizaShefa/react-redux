import { BUY_CAKES } from "./cakeTypes"

const initalState ={
    numOfCakes :10
}
 const cakeReducer= (state =initalState ,action)=>{

switch (action.type) {
    case BUY_CAKES:return {
        ...state,
        numOfCakes:state.numOfCakes- action.payLoad
    }

    default: return state

}

}

export default cakeReducer;