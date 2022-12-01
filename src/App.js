import './App.css';
import Car from './model/Car';
import MovieList from './model/MovieList';
import Product from './model/Product';
import FPTShop from './phone/FPTShop';
import CartRedux from './cartStore/CartRedux'
function App() {
  return (
    <div className="App">
      {/* <Car/> */}
      {/* <MovieList/> */}
      {/* <Product/> */}
      {/* <FPTShop/> */}
      <CartRedux/>
    </div>
  );
}

export default App;
