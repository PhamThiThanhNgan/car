import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {createProduct} from '../action/productAction'
 class ProductFrom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       values:{
        name:"",
        image: "",
        price: "",
        description: "",
       }
    }
  }
  handleSubmit = async (evt)=>{
    evt.preventDefault();
    this.props.createProduct(this.state.values);
    // try {
    //  await axios.post("https://61bee974b25c3a00173f4bd0.mockapi.io/product",this.state.values);
    // //sd ach nay se khong thay nhung sp dc them dong thoi
    // // this.props.createProduct(data);

    // // props nay khong phai lay tu mapDispatchToProps, ma tu cpn cha truyen xuong
    // this.props.onSubmitSuccess();
    // } catch (error) {
    //   console.log(error)
    // }
  }
  handleChange =(evt)=>{
    const {name,value} = evt.target;
    this.setState((state)=>({
      values :{
        ...state.values,
        [name]: value,
      }
    }))
  }
  render() {
    const {values}=this.state
    return (
     <form onSubmit={this.handleSubmit}>
      <div className='row'>
      <div className='col-sm-6'>
        <div className='mt-3'>
        <label htmlFor="name">Name</label>
        <input value={values.name} onChange={this.handleChange} type="text" id='name' name="name" className='form-control'></input>
        </div>
        <div className='mt-3'>
        <label htmlFor="image">Image</label>
        <input value={values.image} onChange={this.handleChange} type="text" id='image' name='image' className='form-control'></input>
        </div>
      </div>
      <div className='col-sm-6'>
      <div className='mt-3'>
        <label htmlFor="price">Price</label>
        <input value={values.price} onChange={this.handleChange} type="text" id='price' name='price' className='form-control'></input>
        </div>
        <div className='mt-3'>
        <label htmlFor="description">Description</label>
        <input value={values.description} onChange={this.handleChange}  type="text" name='description' id='description' className='form-control'></input>
        </div>
      </div>
      <div className='mt-2'>
        <button  className='btn btn-dark  col-sm-2'>Submit</button>
        </div>
      </div>
     
     </form>
    )
  }
}
const mapDispatchToProps =(dispatchEvent) => {
  return{
    createProduct:(product)=>{
      // const action={type:"createProduct",product}
      dispatchEvent(createProduct(product));
    }
  }
}
export default connect(null,mapDispatchToProps)(ProductFrom)