import React, { Component } from 'react'
import "./Product"
import data from "../data.json"
import ProductList from './ProductList'
export default class Product extends Component {
  render() {
    return (
      <div className='container'>
        <ProductList product={data}/>
      </div>
    )
  }
}
