
import React, { Component } from 'react'
import data from '../phone/data.json'
import Model from './Model'
import PhoneItem from './PhoneItem'
import PhoneList from './PhoneList'
export default class FPTShop extends Component {
  state={
    selectProduct : null,
    addProduct : [],
  }
  handleSelect =(product)=>{
    console.log(product)
    this.setState({
      selectProduct : product,
    })
  }
  handleAddproduct =(addproduct)=>{
    console.log(addproduct)
    const index = this.state.addProduct.findIndex(item => item.id === addproduct.id);
    if(index === -1){
      //them moi
      this.setState(state => ({
        addProduct: [...state.addProduct,{...addproduct,quantity:1}]
      }))
    }else{
      //tang so luong
      //sao chep thanh 1 arr moi
      const  addProduct = [...this.state.addProduct];
      //thuc hien thay doi tren arr nay neu trung id thi tang so luong len 1
      addProduct[index].quantity +=1;
      //roi setState lai
      this.setState({ addProduct})
    }
  }
  handelRemove =(removeproductID)=>{
    console.log(removeproductID)
    const addProduct = this.state.addProduct.filter((item) => item.id !== removeproductID)
    this.setState({addProduct})
    
  }
  hanldeChangeProduct = (id,value)=>{
    console.log(id)
    // const index = this.state.addProduct.findIndex(item => item.id ===id);
    // //thay doi thi phai tao [ ] moi
    // const addProduct =[...this.state.addProduct]
    // addProduct[index].quantity +=value;
    // this.setState({addProduct})
    const addProduct = this.state.addProduct.map(item =>{
      if(item.id===id){
        return {...item,quantity :item.quantity +  value}
      }
      return item;
    })
    this.setState({addProduct});
  }
  render() {
    return (
      <div className='container'>
        <div className='d-flex justify-content-end'>
          <button className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#phone-modal">Gio Hang</button>
        </div>
       <PhoneList data={data} onSelect={this.handleSelect} onAdd={this.handleAddproduct}/>
       <PhoneItem products ={this.state.selectProduct}/>
       <Model carts={this.state.addProduct} ondelect={this.handelRemove} onchange={this.hanldeChangeProduct}/>
      </div>
    )
  }
}
