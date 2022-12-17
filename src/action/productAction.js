import axios from 'axios'
import * as actionTypes from '../constants/productConstant'; 
//khi chua co redux thunk, action chi co the la 1 plan object
// export const getProduct =(product) =>{
//   return {type :"GetProduct",product:data};
// }


//khi co redux thunk, action co the la 1 async function
//trong function se nhan dc 2 tham so dispatch va getState
export const getProduct = () =>{
    return async (dispatch,getState)=>{
      //call api
      try {
        //trc khi call api dispatch action de set isloading =true
        dispatch({type: actionTypes.LoadingProduct});
        //call api
        const response = await axios.get("https://61bee974b25c3a00173f4bd0.mockapi.io/product");
        //goi api thanh cong dispatch 1 action moi de dua data len store va set lại isloading = false 
        dispatch ({type :actionTypes.GetProduct,product:response.data});
      } catch (error) {
        //call api that bai dispatch 1 action de set isloading = false va set error
        dispatch({type:actionTypes.GetProduct_Rejected,error:error.response.data});
      }
    }
   }
// export const getProduct = async () =>{
//     //call api lay danh sach san pham
//     try {
//         const response = await axios.get("https://61bee974b25c3a00173f4bd0.mockapi.io/product");
//         //goi api thanh cong return ve action kem data
//         return {type :"GetProduct",product:response.data};
//       } catch (error) {
//         console.log(error);
//       }
   
// }

export const deleteProduct =(productId)=>{
  return async (dispatch,getState) =>{
    try {
      await axios.delete(`https://61bee974b25c3a00173f4bd0.mockapi.io/product/${productId}`);
      //sau khi xoa thanh cong du lieu chi moi thay doi o phia server lam cach nao de giao dien thay doi
      //dispatch action getProduct
      dispatch(getProduct());
    } catch (error) {
      console.log(error)
    }
  }
}

export const createProduct = (product,onSucces)=>{
  
  return async(dispatch,getState)=>{
    try {
      await axios.post("https://61bee974b25c3a00173f4bd0.mockapi.io/product",product);
     //sd ach nay se khong thay nhung sp dc them dong thoi
     // this.props.createProduct(data);
 
     // props nay khong phai lay tu mapDispatchToProps, ma tu cpn cha truyen xuong
     dispatch(getProduct())
     onSucces();
     } catch (error) {
       console.log(error)
     }
  }
}
export const selectProduct =(productId)=>{
  return async (dispatch)=>{
    try {
      const {data} = await axios.get(`https://61bee974b25c3a00173f4bd0.mockapi.io/product/${productId}`);
      dispatch({type:actionTypes.selectProducts,product:data})
    } catch (error) {
      console.log(error)
    }
  }
}
export const updateProduct = (productId,product,onSucces)=>{
  return async (dispatch)=>{
    try {
      await axios.put(`https://61bee974b25c3a00173f4bd0.mockapi.io/product/${productId}`,product);
      dispatch (getProduct());
      onSucces();
    } catch (error) {
      console.log(error)
    }
  }
}