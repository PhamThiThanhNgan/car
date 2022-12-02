import React, { Component } from 'react'
import UserFrom from './UserFrom'
import UserList from './UserList'
export default class UserManagement extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='text-center' >User Management</h1>
        <UserFrom/>
        <UserList/>
      </div>
    )
  }
}
