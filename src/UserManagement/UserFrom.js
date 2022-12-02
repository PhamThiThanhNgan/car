import React, { Component } from 'react'
import {connect} from 'react-redux'
 class UserFrom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //object values dung de save cac gia tri dc nhap tu inputs 
       values:{
          firstName: props.user.firstName || '',
          lastName: props.user.lastName || '',
          email: props.user.email || '',
          address: props.user.address || '',
          dateOfBirth: props.user.dateOfBirth || '',
       }
    }
  }
  handleChange =(evt)=>{
    //name khai bao duoi input phai trung vs key cua value
    const {name,value} = evt.target //.target la DOM toi input 
    this.setState((state)=>({
      values:{
        ...state.values,
        [name]:value,
      }
    }))
  }
  handleSubmit =(evt)=>{
    //ngan chan hanh vi reload form
    evt.preventDefault();
    if(this.props.user.id){
      //cap nhat
      this.props.updateUser(this.props.user.id,this.state.values);
    }else{
      //tao moi
    //them object user vao arr user trong store
    const id = Math.floor(Math.random()*100);
    const user ={...this.state.values,id}
    this.props.onCreateUser(user);
    }
   
  }
  render() {
    //lay value hien thi len man hinh
    const {values}= this.state
    return (
      //khi click button co type la submit, form se kich hoat su kien onsubmit
     <form onSubmit={this.handleSubmit}>
       <div className='row'>
        <div className="col-sm-6">
          <div className='mb-3'>
            <label className='form-lable' htmlFor='firstName' >FristName</label>
            
            <input type="text" name="firstName" value={values.firstName} id='firstName' className='form-control' onChange={this.handleChange}></input> 
          </div>
          <div className='mb-3'>
            <label className='form-lable' htmlFor='lastName'>LastName</label>
            <input type="text" id='lastName' name="lastName" value={values.lastName} className='form-control' onChange={this.handleChange}></input>
          </div>
          <div className='mb-3'>
            <label className='form-lable' htmlFor='email'>Email</label>
            <input type="text" id='email' name="email" className='form-control' value={values.email} onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="col-sm-6">
        <div className='mb-3'>
            <label className='form-lable' htmlFor='address'>Address</label>
            <input type="text" id='address' name="address" value={values.address} className='form-control' onChange={this.handleChange}></input>
          </div>
          <div className='mb-3'>
            <label className='form-lable' htmlFor='dateOfBirth'>Date of Birth</label>
            <input type="text" id='dateOfBirth' name='dateOfBirth' value={values.dateOfBirth} className='form-control' onChange={this.handleChange}></input>
          </div>
        </div>
        <div> <button className='btn btn-dark' onClick={this.handleSubmit}>Submit</button></div>
      </div>
     </form>
      
    )
  }
}
const mapDispatchToProps =(dispatchEvent)=>{
  return{
    onCreateUser:(user)=>{
      const action ={type:"Create_submit_user",user}
      dispatchEvent(action)
    }
  }
}
const mapStateToProps =(state)=>{
  return{
    key: state.user.selectedUser.id,
    user: state.user.selectedUser,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserFrom)