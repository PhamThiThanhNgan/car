import React, { Component } from 'react'
import {connect} from 'react-redux'
 class UserList extends Component {
  render() {
    const {users,onDelete,onselectUSer}=this.props
    return (
      <table className='table mt-5'>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(item =>{
                return(
                  <tr key={item.id}>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>
                    <button onClick={()=>onselectUSer(item)} className='btn - btn-primary mr-2'>Update</button>
                    <button className='btn - btn-danger' onClick={()=>onDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                  
                )
              })
            }
          </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    //rootState.reducerName.stateName
    users: state.user.users,
  }
}
const mapDispatchToProps = (dispatchEvent) => {
  return {
    onDelete:(userID)=>{
      const action={type:"Delete_user",userID}
      dispatchEvent(action)
    },
    onselectUSer:(user)=>{
      const action={type:"Select_user",user}
      dispatchEvent(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserList)