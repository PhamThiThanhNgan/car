import * as actionTypes from '../constants/productConstant'; 
const initialState ={
    products:[],
    selectProduct: {},
    isLoading: false,
    error:null
}
const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.LoadingProduct:{
            return {...state,isLoading : true}
        }
        case actionTypes.GetProduct:{
            return {...state,products: action.product,isLoading : false}
        }
        case actionTypes.GetProduct_Rejected:{
            return {...state,error:action.error,isLoading : false}
        }
        case actionTypes.selectProducts:{
            return {...state,selectProduct: action.product}
        }
       default:
        return state;
    }

}
export default productReducer;