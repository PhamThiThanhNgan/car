import './App.css';
import Car from './model/Car';
import MovieList from './model/MovieList';
import Product from './model/Product';
import FPTShop from './phone/FPTShop';
import CartRedux from './cartStore/CartRedux'
import UserManagement from './UserManagement/UserManagement';
import ProductManagement from './lifecycle/ProductManagement'
function App() {
  return (
    <div className="App">
      {/* <Car/> */}
      {/* <MovieList/> */}
      {/* <Product/> */}
      {/* <FPTShop/> */}
      {/* <CartRedux/> */}
      {/* <UserManagement/> */}
      {/* <Lifecycle/> */}
      <ProductManagement/>
    </div>
  );
}

export default App;
