import { BUY_ICECREAM } from "./iceCreamType";


const initialState = {
    numOfIcecream:100
}

export const icecreamReducer = (state=initialState,action)=>{
    console.log('hello',action)
    switch(action.type){
        case 'BUY_ICECREAM': return({
            ...state,
            numOfIcecream:state.numOfIcecream-1
        })

        default: return state;
    }
}

