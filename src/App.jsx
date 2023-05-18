import './assets/css/bootstrap.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Error from './components/error404/error404';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer title={'¡Bienvenidos a Coffee & Teas!'} /> } />
          <Route path='/category/:itemCat' element={ <ItemListContainer /> } />
          <Route path='/item/:itemId' element={ <ItemDetailContainer /> } />
          <Route path='*' element={ <Error msg={"¡Oops! No encontrado."} /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
