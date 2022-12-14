import React, { Component } from 'react'
import {connect} from 'react-redux'
import ProductItem from './ProductItem'
class ProductList extends Component {
  render() {
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
            this.props.products.map(product =>{
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
  }
}
export default connect(mapSateToProps)(ProductList)