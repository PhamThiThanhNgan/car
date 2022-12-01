const colors =["red", "green", "blue"]
const colorReducer =(state =colors , action)=>{
    switch(action.type){
        case "ADD_COLOR":
            return [...state, action.color]
        case "REMOVE_COLOR":
            return state.filter(color => color!== action.color )
        default:
            return state;
    }
}
export default colorReducer;