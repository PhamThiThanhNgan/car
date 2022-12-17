import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProduct,updateProduct} from '../action/productAction'
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
  handleoOnSucces=()=>{
    this.setState({
      values:{
        name:"",
        image: "",
        price: "",
        description: "",
       }
    })
  }
  handleSubmit = (evt)=>{
    evt.preventDefault();
    const {id,...product}=this.state.values;
    if(id){
      this.props.updateProduct(id,product,this.handleoOnSucces)
    }else{
      this.props.createProduct(this.state.values,this.handleoOnSucces);
    }
    
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
  componentDidUpdate(prevProps) {
    if(prevProps.selectProduct.id !== this.props.selectProduct.id) {
      //setState lai vale = gia tri moi thay doi cua props selectProduct
     this.setState({values:{...this.props.selectProduct}});
  }
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
const mapStateToProps = (state)=>{
  return{
    selectProduct: state.product.selectProduct,
  }
}
const mapDispatchToProps =(dispatchEvent) => {
  return{
    createProduct:(product,onSucces)=>{
      dispatchEvent(createProduct(product,onSucces));
    },
    updateProduct:(productId,product,onSucces)=>{
      dispatchEvent(updateProduct(productId,product,onSucces));
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductFrom)