import './ItemList.css';
import ItemList from './ItemList';
import LoadingSpinner from './../Loading/LoadingSpinner';
import { Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore';

const ItemListContainer = ( {title} ) => {
  const [items, setItems] = useState([null]);
  const [loading, setLoading] = useState(true);
  const {itemCat} = useParams();

  useEffect(() => {
    const queryDb = getFirestore();
    const itemsCollection = itemCat 
    ? query(collection(queryDb, 'Items'), orderBy("name"), where('cat', '==', itemCat))
    : query(collection(queryDb, 'Items'), orderBy("name"))

    getDocs(itemsCollection)
    .then(snapshot => {
      setItems(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))})
    .catch(error => console.log(error))
    .finally(() => setLoading(false))
  }, [itemCat])

  return (
    <section className='itemlist-container'>
      <Container>
      { loading
          ?   
            <LoadingSpinner />
          :  
            <>
              { title ? <h2>{title}</h2> : '' }
              <Nav className="justify-content-center itemlist__nav-categories">
                <NavLink to={"/category/cafe"} role="button" className="nav-link">Café</NavLink>
                <NavLink to={"/category/infusiones"} role="button" className="nav-link">Infusiones</NavLink>
                <NavLink to={"/category/accesorios"} role="button" className="nav-link">Accesorios</NavLink>
              </Nav>
              <ItemList products={items} />
            </>
      }
      </Container>
    </section>
  )
}

export default ItemListContainer