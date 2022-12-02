import {combineReducers} from 'redux';
import countReducer from './countReducer';
import colorReducer from './coloReducer';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
const rootReducer = combineReducers({
    count : countReducer,
    color : colorReducer,
    cart : cartReducer,
    user : userReducer,
})

export default rootReducer;