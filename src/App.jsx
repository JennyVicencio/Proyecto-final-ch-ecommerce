import './assets/css/bootstrap.css';
import './App.css';
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import Home from './views/Home/Home';
import Error from './views/404/Error404';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/all' element={ <ItemListContainer title={'Explora todos nuestros productos'} /> } />
            <Route path='/category/:itemCat' element={ <ItemListContainer /> } />
            <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
            <Route path='/cart/' element={ <Cart /> } />
            <Route path='/checkout/' element={ <Checkout /> } />
            <Route path='*' element={ <Error /> } />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
