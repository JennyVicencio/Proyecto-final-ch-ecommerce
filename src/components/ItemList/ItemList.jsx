import Item from '../../components/Item/Item';
import { Row } from 'react-bootstrap';

const ItemList = ( {products} ) => {

  return (
    <section>
      <Row className='g-4'>
        { products.map(prod => <Item key={prod.id} {...prod} />) }
      </Row>
    </section>
  )
}

export default ItemList