import './ItemDetail.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import { Row, Col, Figure, Image } from 'react-bootstrap';

// import { Link } from 'react-router-dom'

const ItemDetail = ( { item } ) => {  
  const {id, name, img, price, desc, cat, stock} = item;

  return (
    <div className='item-detail'>
          <Row>
            <Col lg={8}>
              <div className='mb-4'>
                <h2 className='item-detail__name'>{name}</h2>
                <div className='item-detail__cat'>#{cat}</div>
              </div>
              <div className='item-detail__img'>
                <Figure className="figure">
                  <Image src={img} className="figure-img img-fluid rounded" alt="..." />
                  <figcaption className="figure-caption">
                    <span className='item-detail__id'>Código: {id}</span>
                  </figcaption>
                </Figure>
              </div>
            </Col>
            <Col lg={4}>
              <div className='item-detail__price'>
                Precio:
                <span>${price}</span>
              </div>
              <div className='item-detail__stock'>
                {stock > 5 ? `Quedan: ${stock}` : `¡Quedan solo ${stock}!`}
              </div>
              <div className='item-detail__addToCart'>
                Cantidad:
                <ItemCount initial={1} stock={stock} onAdd={(itemcount) => console.log("Agregado al carrito", itemcount)} />
              </div>
            </Col>
            <Col lg={12}>
              <div className='item-detail__desc'>
                Descripción:
                <p>{desc}</p>
              </div>
            </Col>
          </Row>
    </div>
  )
}

export default ItemDetail