import React, { Component } from 'react'
import {connect} from 'react-redux'
 class ProductItem extends Component {
  render() {
    const {item,addToCart,deleteCart} =this.props;

    return (
      <div className='col'>
          <img src={item.image} alt={item.name}/>
          <h4>{item.name}</h4>
          <p>{item.price}</p>
          <button type="button" onClick={()=>addToCart(item)} className="btn btn-danger">Them Gio Hang</button>
      </div> 
    )
  }
}
const mapDispatchToProps =(dispatchEvent) => {
      return {
        addToCart: (item) =>{
          const acction ={type:"ADD_TO_CART",item}
          dispatchEvent(acction)
        }
      }
}
export default connect(null,mapDispatchToProps)(ProductItem)