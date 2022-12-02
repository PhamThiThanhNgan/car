const initialState={
    users:[
        {
            id:1,
            firstName: 'Ngan',
            lastName: 'Thanh',
            email: 'thanh@gmail.com',
            address: 'HCM',
            dateOfBirth: "26/12/2000",
        }
    ],
    selectedUser: {},
}

const userReducer=(state = initialState, action)=>{
    switch(action.type){
        case 'Create_submit_user':
            {
                const users =[...state.users,action.user]
                return {...state,users}
            }
            case "Delete_user":
                {
                    const users=state.users.filter(item => item.id !== action.userID)
                    return {...state,users}
                }
            case "Select_user":{
                return {...state,selectedUser:action.user}
            }
        default:
            return state;
    }
}
export  default userReducer;