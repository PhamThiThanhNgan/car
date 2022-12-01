import React, { Component } from 'react'
import ProductItem from "./ProductItem"
export default class ProductList extends Component {
  
  render() {
    const {products} = this.props;
    return (
      <div className='row'>
         {
          products.map((item)=>{
            return(
              <div key={item.id} className="col-sm-4">
                <ProductItem item={item}/>
              </div>
            )
          })
         }
      </div>
    )
  }
}
