const initialState ={
    carts:[],
    toltalPrice:0,
}
const cartReducer =(state=initialState, action)=>{
    switch(action.type){
    case "ADD_TO_CART":
        {
        const index =state.carts.findIndex((item) => item.id === action.item.id)
        const carts = [...state.carts]
        if(index === -1){
        carts.push({...action.item,quantity:1});
        }else{
        carts[index].quantity +=1;
        }
        return {...state, carts}
    }
    case "Delete_Cart":
        {
            const carts = state.carts.filter(item => item.id !== action.itemId)
            const toltalPrice = carts.reduce((total,item)=>{
                return total + item.quantity *item.price;
            },0)
            return {...state,carts,toltalPrice}
        }
        case "Change_Cart_Quantity":
            {
                const carts = state.carts.map((item )=> {
                    if(item.id === action.itemId){
                        return {...item,quantity: item.quantity + action.quantity}
                    }
                    return item;
                })
                const toltalPrice = carts.reduce((total,item)=>{
                    return total + item.quantity *item.price;
                },0)
                return {...state,carts,toltalPrice}
            }
        default: 
        return state;
    
}
};

export default cartReducer;