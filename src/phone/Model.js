import React, { Component } from 'react'

export default class Model extends Component {
  render() {
    const {carts,ondelect,onchange}=this.props
    const toltal =carts.reduce((total,item)=>{
        return total + item.price* item.quantity;
    },0);
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
                                            carts.map((item )=>{
                                                return (
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td><img src={item.image} alt={item.name} width="50px" height="50px"/></td>
                                                            <td>{item.name}</td>
                                                            <td>
                                                                <button disabled=
                                                                {item.quantity===1} onClick={()=>onchange(item.id,-1)}>-</button>
                                                                {item.quantity}
                                                                <button onClick={()=>onchange(item.id,1)}>+</button>
                                                            </td>
                                                            <td>{item.price}</td>
                                                            <td>{item.price * item.quantity}</td>
                                                            <td ><button onClick={()=>ondelect(item.id)} className='btn btn-danger'>Xoa</button>
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
