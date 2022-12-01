import React, { Component } from 'react'
import ProductList from "./ProductList"
import ProductCart from "./ProductCart"
import data from "./data.json"
export default class CartRedux extends Component {
  render() {
    return (
      <div className='container'>
        <h1 style={{textAlign:"center"}}>Wellcome to Thanh Ngan</h1>
      <div className='d-flex justify-content-end'>
        <button className='btn btn-danger' data-bs-toggle="modal" data-bs-target="#phone-modal"> Giỏ Hàng </button>
      </div>
      <ProductList products={data}/>
      <ProductCart/>
      </div>
    )
  }
}
