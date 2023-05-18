import './ItemListContainer.css';
import ItemList from '../../components/ItemList/ItemList';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getItems } from '../../assets/js/mockItems';

const ItemListContainer = ( {title} ) => {
  const [items, setItems] = useState([]);
  const {itemCat} = useParams();
  
  useEffect(() => {
    itemCat 
    ? 
    getItems()
      .then(response => {
        setItems(response.filter(prod => prod.cat.toLowerCase() === itemCat));
      })
      .catch( error => {
        console.log(error);
      })
    :
    getItems()
      .then(response => {
        setItems(response);
      })
      .catch( error => {
        console.log(error);
      })
  }, [itemCat])
  // console.log('Items by cat: ', items);
  
  return (
    <section className='itemlist-container'>
      <Container>  
          <h1>{title}</h1>
          <ItemList products={items} />
      </Container>
    </section>
  )
}

export default ItemListContainer