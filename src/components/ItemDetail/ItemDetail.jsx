import './ItemDetail.css';
import ItemCount from './ItemCount';
import { Alert, Row, Col, Figure, Image } from 'react-bootstrap';
import { ButtonContinue, ButtonCart }  from '../../components/Buttons/Buttons';
import { Link } from 'react-router-dom';
import { useCartContext } from './../../context/CartContext';
import { useCurrencyConverter } from './../../hooks/useCurrencyConverter';

const ItemDetail = ( { item } ) => {
  const {id, name, img, price, desc, cat, stock} = item;
  const {addItem, isInCart} = useCartContext();

  const addToCart = (quantity) => {
    const itemAdded = { id, name, img, cat, price, stock }
    addItem(itemAdded, quantity);
    // console.log(quantity, " items agregados.");
  }

  return (
    <div className='item-detail'>
      <Row>
        <Col lg={8}>
          <div className='mb-4'>
            <h2 className='item-detail__name'>{name}</h2>
            <div className='item-detail__cat'>
              <Link to={`/category/${cat}`} role="button">#{cat}</Link>
            </div>
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
            <h2 className='h4'>Precio:</h2>
            <span>{useCurrencyConverter(price, 'CLP')}</span>
          </div>
          <div className='item-detail__stock'>
            {stock > 5 ? `Quedan: ${stock}` : `¡Quedan solo ${stock}!`}
          </div>
          <div className='item-detail__addToCart'>
            {
              isInCart(id)
              ? (
                <>
                  <Alert variant="success" dismissible>
                    <p className='mb-0'>¡Producto añadido al carrito!</p>
                  </Alert>
                  <ButtonCart text={'Ver en el carrito'} className="mb-4" />
                  <ButtonContinue />
                </>
              )
              : (
                <>
                  <h2 className='h4'>Cantidad:</h2>
                  <ItemCount stock={stock} onAdd={addToCart} />
                  <ButtonContinue />
                </>
              )
            }
          </div>
        </Col>
        <Col lg={12}>
          <div className='item-detail__desc'>
            <h2 className='h4'>Descripción:</h2>
            <p>{desc}</p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ItemDetail