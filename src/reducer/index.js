import {combineReducers} from 'redux';
import countReducer from './countReducer';
import colorReducer from './coloReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';
const rootReducer = combineReducers({
    count : countReducer,
    color : colorReducer,
    cart : cartReducer,
    user : userReducer,
    product: productReducer,
})

export default rootReducer;