import "./Phone.scss"
import React, { Component } from 'react'
export default class PhoneList extends Component {
  
  render() {
    const {data,onSelect,onAdd} = this.props;
    return (
      <div className='row'>
         {
          data.map((item)=>{
            return(
              <div key={item.id} className="col-sm-4">
                  <div className='col colum'>
                     <img src={item.image} alt={item.name}/>
                      <h4>{item.name}</h4>
                      <p>{item.price}</p>
                      <button  type="button" className="btn btn-success" onClick={()=> onSelect(item)}>Xem Chi Tiết</button>
                      <button onClick={()=>onAdd(item)} type="button" className="btn btn-danger">Them Gio Hang</button>
                  </div>
              </div>
            )
          })
         }
      </div>
    )
  }
}
