import React, { Component } from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
import {deleteProduct} from '../action/productAction'
class ProductItem extends Component {
  // onDelete = async()=>{
  //   try {
  //     await axios.delete(`https://61bee974b25c3a00173f4bd0.mockapi.io/product/${this.props.product.id}`);
  //     this.props.onDeleteSuccess();
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  render() {
    const {product} = this.props
    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td><img src={product.image} alt={product.name} width="70px" height="70px"/></td>
        <td>{product.price}</td>
        <td>{product.description}</td>
        <td>
          <button className='btn btn-success me-1'>Update</button>
          <button className='btn btn-danger' onClick={()=>this.props.deleteProduct(product.id)}>Delete</button>
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
  }
}
export default connect(null,mapDispatchToProps)(ProductItem)