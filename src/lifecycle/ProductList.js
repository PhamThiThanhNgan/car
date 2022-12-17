import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductItem from './ProductItem'
class ProductList extends Component {
  render() {
    const { products,isLoading,error}=this.props
    if(isLoading){
      //return <Loading/>
      return <h1>Loading...</h1>
    }
    if(error){
      //return <ErrorMessage error={error}/>
      return <h1>{error}</h1>
    }
    return (
      <table className='container text-center'>
        <thead>
        <tr>
        <th>No.</th>
        <th>Name</th>
        <th>Image</th>
        <th>Price</th>
        <th>Description</th>
        <th></th></tr>
        </thead>
        <tbody>
          {
            products.map(product =>{
              return <ProductItem key={product.id} product={product}/>
            })
          }
        </tbody>
      </table>
    )
  }
}
const mapSateToProps = state =>{
  return {
    products: state.product.products,
    isLoading: state.product.isLoading,
    error: state.product.error,
  }
}
export default connect(mapSateToProps)(ProductList)