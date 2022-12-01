import {combineReducers} from 'redux';
import countReducer from './countReducer';
import colorReducer from './coloReducer';
import cartReducer from './cartReducer';
const rootReducer = combineReducers({
    count : countReducer,
    color : colorReducer,
    cart : cartReducer,
})

export default rootReducer;