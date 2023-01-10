import {combineReducers} from 'redux';
import {reducer} from './cakes/cakeReducers';
import {icecreamReducer} from './icecream/iceCreamReducer';

const rootReducer = combineReducers({
    cake: reducer,
    iceCream: icecreamReducer
})

export default rootReducer;