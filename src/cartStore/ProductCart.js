import React, { Component } from 'react'
import {connect} from 'react-redux'
 class ProductCart extends Component {
  render() {
    console.log(this.props)
    const {cart,toltalPrice,deleteCart,onchangeQuantity} =this.props
    return (
      <div className="modal fade" id="phone-modal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
          <div className="modal-content">
          <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Gio Hang</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
              <div >
                  <table className='table'>
                      <thead>
                          <tr>
                          <th> Ma san pham</th>
                          <th> hinh anh</th>
                          <th> ten san pham</th>
                          <th> so luong</th>
                          <th> don gia</th>
                          <th> thanh tien</th>
                          <th></th>
                          </tr>
                          
                      </thead>
                      <tbody >
                          {
                          cart.map((item )=>{
                              return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td><img src={item.image} alt={item.name} width="50px" height="50px"/></td>
                        <td>{item.name}</td>
                       <tr>
                       <button onClick={()=>onchangeQuantity(item.id,-1)} >-</button>
                            <td>{item.quantity}</td>
                      <button onClick={()=>onchangeQuantity(item.id,1)}>+</button>
                       </tr>
                           
                        
                        <td>{item.price}</td>
                        <td>{item.price * item.quantity}</td>
                        <td ><button className='btn btn-danger' onClick={()=>deleteCart(item.id)}>Xoa</button>
                        </td>
                    </tr>
                              )
                          })
                          }
                      </tbody>
                  </table>
              </div>
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
          </div>
          </div>
      </div>
  </div>
    )
  }
}
const mapStateToProps = (state)=>{
  //nhung gi return se duoc dua vao lam props cua component
  return {
    cart: state.cart.carts,
    totalPrice: state.cart.toltalPrice,
  }
}
const mapDispatchToProps =(dispatchEvent)=>{
    return {
        deleteCart: (itemId)=>{
            const acction = {type:"Delete_Cart",itemId}
            dispatchEvent(acction)
        },
        onchangeQuantity: (itemId, quantity)=>{
            const acction = {type:"Change_Cart_Quantity",itemId,quantity}
            dispatchEvent(acction)
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductCart);
