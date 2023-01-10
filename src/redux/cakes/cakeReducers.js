const { BUY_CAKE } = require("./cakeTypes")

const initialState = {
    numOfCakes: 10
}

 export const reducer = (state=initialState,action)=>{
    console.log(action)
    switch(action.type){
        case BUY_CAKE: return({
            ...state,
            numOfCakes:state.numOfCakes-action.payload
        })

        default: return state;
    }
}

