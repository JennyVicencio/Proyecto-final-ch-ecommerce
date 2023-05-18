import './ItemDetailContainer.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getItems } from '../../assets/js/mockItems';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [items, setItems] = useState([null]);
  const { itemId } = useParams();

  useEffect(() => {
    getItems()
      .then(response => {
        setItems(response.find(prod => prod.id === parseInt(itemId)));
      })
      .catch( error => {
        console.log(error);
      });
  }, [itemId])
  
  console.log('Items by id: ', items);

  return (
    <div className='item-detail-container'>
      <Container>
        <ItemDetail item={items} />
      </Container>
    </div>
  )
}

export default ItemDetailContainer