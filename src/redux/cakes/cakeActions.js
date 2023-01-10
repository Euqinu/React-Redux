const { BUY_CAKE } = require("./cakeTypes")


export const buyCake=(numCake)=>{
    return({
        type: BUY_CAKE,
        payload:numCake
    })
}