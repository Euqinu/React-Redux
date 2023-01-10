import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from './redux/cakes/cakeActions';
import { buyIcecream } from './redux/icecream/icecreamAction';


function IcecreamContainer(props){
    return(
        <div>
            <h2>Icecream Shop {props.numOfIcecream}</h2>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )   
}

const mapStateToProps = (state)=>{
    return ({
        numOfIcecream:state.iceCream.numOfIcecream
    })
}

const mapDispatchToProps = (dispatch)=>{
    return ({
        buyIcecream: ()=>dispatch(buyIcecream())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamContainer);