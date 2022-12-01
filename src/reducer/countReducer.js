const countReducer =(state =1,action)=>{
    switch(action.type){
        case "ADD_COUNT":
            return state + 1;
        case "DECREMENT_COUNT":
            return state - 1;
        default:
            return state;
    }
}
export default countReducer;