import React, { Component } from 'react'
import "./Product.scss"
export default class ProductItem extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className='col'>
        <img src={item.image} alt={item.name}/>
        <h4>{item.name}</h4>
        <p>{item.price}</p>
        <p>{item.shortDescription}</p>
      </div>
    )
  }
}
