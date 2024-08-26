import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCreamReduser from "./icecream/iceCreamReducer";
import appleReducer from "./apple/appleReducer";
import userReducer from './Users/userReducer'
  const rootRducer =combineReducers({cake:cakeReducer,  iceCream:iceCreamReduser, apple:appleReducer , user:userReducer})

  export default rootRducer;