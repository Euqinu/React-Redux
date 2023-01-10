import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './redux/cakes/cakeActions';


function NewCakeContainer(){
    const [numCake,setNumCake]=useState(0);
    const cakeValue = useSelector(state=>state.cake.numOfCakes);
    const dispatch = useDispatch();

    const onChangeCake = (e) => {
        console.log(e.target.value)
        setNumCake(e.target.value);
    }

    return(
        <div>
            <h2>Cake store - {cakeValue} cakes</h2>
            {console.log(numCake)}
            <input type="text" value={numCake} onChange={(e)=>onChangeCake(e)}/>
            <button onClick={()=>dispatch(buyCake(numCake))}>Buy Cake</button>
        </div>
    )
}

export default NewCakeContainer;