import React, { Component } from 'react'
import "./Phone.scss"
export default class PhoneItem extends Component {
  render() {
    const {products}=this.props
    if(!products){
      return null;
    }
   return (
    <div className='row'>
    <div className='col-sm-4'>
     <h4 style={{textAlign:'center'}}>{products.name}</h4>
     <img style={{width:"100%" , height:"400px"}} src={products.image} alt={products.name} />
     </div> 
      <div className='col-sm-8'>
      <table className='table' style={{textAlign:'center'}}>
        <h3>Thong so ky thuat</h3>
        <tbody >
          
        <tr>
            <td>Man Hinh</td>
            <td>{products.display}</td>
          </tr>
          <tr>
          <td>He dieu hanh</td>
            <td>{products.os}</td>
          </tr>
          <tr>
          <td>Ram</td>
            <td>{products.ram}</td>
          </tr>
          <tr>
          <td>Rom</td>
            <td>{products.rom}</td>
          </tr>
          <tr>
          <td>Camera Truoc</td>
            <td>{products.cameraFront}</td>
          </tr>
          <tr>
          <td>Camera Sau</td>
            <td>{products.cameraBlack}</td>
          </tr>
        </tbody>
          
      </table>
     </div> 
     </div>
   )
      
  }
}
