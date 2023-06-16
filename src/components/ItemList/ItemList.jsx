import Item from './Item';
import { Row } from 'react-bootstrap';

const ItemList = ( {products} ) => {

  return (
    <>
      <Row className='g-4'>
        { products.map(item => <Item key={item.id} {...item} />) }
      </Row>
    </>
  )
}

export default ItemList