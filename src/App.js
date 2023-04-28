import './css/custom-bootstrap.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo={'¡Bienvenidos a Coffee House!'} />
    </div>
  );
}

export default App;
