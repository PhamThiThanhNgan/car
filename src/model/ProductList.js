import React, { Component } from 'react'
import "./Product.scss"
import ProductItem from './ProductItem'
export default class ProductList extends Component {
  render() {
    const {product}= this.props;
    return (
      <div className="row">
        {product.map((index)=>{
                return(
                    <div key={index.id} className="col-sm-4">
                        <ProductItem item={index}/>
                    </div>
                );
            })
        }
        
      </div>
    )
  }
}
