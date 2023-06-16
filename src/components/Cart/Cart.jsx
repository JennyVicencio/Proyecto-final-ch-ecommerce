import './Cart.css';
import { ButtonBack, ButtonContinue, ButtonClearCart, ButtonCheckout }  from '../../components/Buttons/Buttons';
import CartDetail from '../../components/Cart/CartDetail';
import { Col, Container, Row } from 'react-bootstrap';
import { useCartContext } from './../../context/CartContext';

const Cart = () => {
  const {cart} = useCartContext();

  return (
    <div className='cart-container'>
      <Container>
        <ButtonBack />
        <div className='cart-detail'>
          <h1 className='cart-detail__title'>Carrito de compras</h1>
          <Row>
            { cart.length > 0 
            ?
            <Col sm={12}>
              <div className='mb-4'>
                <CartDetail />
              </div>
              <div className='d-flex flex-column flex-lg-row justify-content-between gap-2'>
                  <ButtonClearCart />
                  <ButtonContinue />
                  <ButtonCheckout />
              </div>
            </Col>
            :
            <Col sm={12}>
              <div className='text-center'>
                <h3 className='my-5'>Tu carrito está vacío.</h3>
                <ButtonContinue className="mb-5" />
              </div>
            </Col>
            }
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Cart;
