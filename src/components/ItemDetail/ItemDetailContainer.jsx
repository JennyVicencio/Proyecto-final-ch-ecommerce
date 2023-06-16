import './ItemDetail.css';
import ItemDetail from './ItemDetail';
import LoadingSpinner from './../Loading/LoadingSpinner';
import { ButtonBack }  from '../Buttons/Buttons';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [item, setItem] = useState([null]);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(()=>{
    const queryDb = getFirestore();
    const itemDoc = doc(queryDb, 'Items', itemId);
    getDoc(itemDoc)
    .then( res => setItem({id: res.id, ...res.data()}))
    .catch(error => console.log(error))
    .finally( () => setLoading(false) )
  },[itemId])
  
  return (
    <div className='item-detail-container'>
      <Container>
        {
          loading
          ?   
            <LoadingSpinner />
          : 
            <>
              <ButtonBack />
              <ItemDetail item={item} />
            </>
        }
      </Container>
    </div>
  )
}

export default ItemDetailContainer