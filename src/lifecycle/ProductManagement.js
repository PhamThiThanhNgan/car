import React, { Component } from 'react'
import  ProductList from './ProductList'
import  ProductFrom from './ProductFrom'
import {connect} from 'react-redux'
import { getProduct } from '../action/productAction'
class ProductManagement extends Component {
  componentDidMount(){
    this.props.getProduct();
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>ProductManagement</h1>
        <ProductList />
        <ProductFrom />
      </div>
    )
  }
}
const mapDispatchToProps =(dispatchEvent) => {
  return {
      getProduct:(product) =>{
        dispatchEvent(getProduct());
      }
  }
}
export default connect(null,mapDispatchToProps)(ProductManagement)
