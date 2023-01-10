import {createStore} from 'redux';
import { reducer } from './cakeReducers';


const store = createStore(reducer)

export default store;