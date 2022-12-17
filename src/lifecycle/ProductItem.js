import React, { Component } from 'react'
import { connect } from 'react-redux'
import {deleteProduct,selectProduct } from '../action/productAction'
class ProductItem extends Component {
  render() {
    const {product,deleteProduct,selectProduct} = this.props
    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td><img src={product.image} alt={product.name} width="70px" height="70px"/></td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>
          <button className='btn btn-success me-1' onClick={()=>selectProduct(product.id)}>Update</button>
          <button className='btn btn-danger' onClick={()=>deleteProduct(product.id)}>Delete</button>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps =(dispatchEvent) => {
  return {
    deleteProduct: (productId) =>{
      dispatchEvent(deleteProduct(productId));
    }
    ,
    selectProduct: (productId) =>{
      dispatchEvent(selectProduct(productId));
    }
  }
}
export default connect(null,mapDispatchToProps)(ProductItem)