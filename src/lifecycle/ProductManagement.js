import React, { Component } from 'react'
import  ProductList from './ProductList'
import axios from 'axios'
import  ProductFrom from './ProductFrom'
import {connect} from 'react-redux'
import { getProduct } from '../action/productAction'
class ProductManagement extends Component {
  // onHanldeSubmitSuccess =()=>{
  //   //goi toi ham nay la da them sp thanh cong, can goi lai api de lay danh sach sp
  //   this.fetchProducts();
  // }
  fetchProducts = async ()=>{
    try {
      const response = await axios.get("https://61bee974b25c3a00173f4bd0.mockapi.io/product");
      //goi api thanh cong gui 1 action len store de cap nhat data tu api cho sate
      this.props.getProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  //ham nay goi toi khi cpn dc khoi tao
  //dung goi api
  componentDidMount(){
    // this.fetchProducts();
    this.props.getProduct();
  }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center'>ProductManagement</h1>
        <ProductList />
        <ProductFrom />
      </div>
    )
  }
}
const mapDispatchToProps =(dispatchEvent) => {
  return {
      getProduct:(product) =>{
        // const action = {type :"GetProduct",product}
        dispatchEvent(getProduct());
      }
  }
}
export default connect(null,mapDispatchToProps)(ProductManagement)
