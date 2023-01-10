

import {createStore} from 'redux';
import rootReducer from './rootReducer';
import {reducer} from './cakes/cakeReducers'
import {icecreamReducer} from './icecream/iceCreamReducer';

const store = createStore(rootReducer) 

export default store;