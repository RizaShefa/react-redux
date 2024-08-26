import { BUY_CAKES } from "./cakeTypes"

export const buyCake =(number=1)=>{
return {
    type: BUY_CAKES,
    payLoad: number
    }
}