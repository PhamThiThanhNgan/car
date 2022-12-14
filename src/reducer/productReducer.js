const initialState ={
    products:[],
}
const productReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GetProduct":{
            return {...state,products: action.product}
        }
        case "createProduct":{
            const products =[...state.products,action.product]
            return {...state,products}
        }
       default:
        return state;
    }

}
export default productReducer;