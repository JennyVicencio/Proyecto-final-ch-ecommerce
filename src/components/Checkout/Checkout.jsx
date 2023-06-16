import './Checkout.css';
import CheckoutForm from './CheckoutForm'
import CheckoutSummary from './CheckoutSummary';
import LoadingSpinner from './../Loading/LoadingSpinner';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { ButtonCart }  from '../../components/Buttons/Buttons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useCartContext();
  const [loading, setLoading] =  useState(true);
  const [orderId, setOrderId] =  useState('');
  const [orderSucceded, setOrderSucceded] =  useState(true);

  const createOrder = async ({name, phone, email}) => {
    if(cart.length > 0) {
      const newOrder = {
        buyer: {name, phone, email},
        item: cart.map(item => ({id: item.id, name: item.name, quantity: item.quantity, price: item.price})),
        total: getTotalPrice(),
        date: serverTimestamp()
      }
      const queryDb = getFirestore();
      const orderCollection = collection(queryDb, 'Orders');
      addDoc(orderCollection, newOrder)
      .then(({id}) => {
          setOrderId(id);
          clearCart();
      })
      .catch(error => console.log(error, "No se pudo realizar la orden."))
      .finally( () => setTimeout(() => {setLoading(false)}, 2000) );
      setOrderSucceded(true);
    }
    else {
      console.log("No se pudo realizar la orden.");
      setOrderSucceded(false);
    }
  }

  let AlertSuccess, AlertFailed;

  if(orderSucceded) {
    AlertSuccess = (
      <Alert variant="success">
        <Alert.Heading>Tu compra ha sido realizada con éxito el { new Intl.DateTimeFormat('es-CL', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()) } <br /><br />
        <span className='text-tertiary'>Orden N°: {orderId}</span>
        </Alert.Heading>
        <p>Pronto te contactaremos a tu correo electrónico.</p>
      </Alert>
    )
  }
  if(!orderSucceded) {
    AlertFailed = (
      <Alert variant="danger" dismissible onClose={() => setOrderSucceded(true)}>
        <Alert.Heading>No es posible realizar tu orden.</Alert.Heading>
        <p>Comprueba que tus productos estén en el carrito de compras correctamente.</p>
        <ButtonCart text='Ir al carrito' />
    </Alert>
    )
  }

  return (
    <div className='checkout-container'>
    <Container>
      <div className='checkout-detail'>
          { !orderId
          ?        
          <>
            <h1 className='checkout-detail__title'>Confirmación del pedido</h1>
            <Row className='g-4'>
              <Col sm={6} md={4} className='order-sm-3'>
                <h3>Resumen</h3>
                <CheckoutSummary />
              </Col>
              <Col sm={6} md={8} className='order-sm-2'>
                <h3>Datos del pedido</h3>
                <CheckoutForm onConfirm={createOrder} />
              </Col>
              <Col sm={12} className='order-sm-1'>
                {AlertFailed}
              </Col>
            </Row>
          </>
          :
          <>
            { loading 
            ?
            <LoadingSpinner />
            :
            <>
              <h1 className='checkout-detail__title'>Muchas gracias por tu compra</h1>
              <Row className='g-4'>
                <Col sm={12} className='order-sm-3'>
                  <>
                    {AlertSuccess}
                    <div className="text-center">
                      <Link to={"/"} role="button" className="btn btn-primary">Ir al inicio</Link>
                    </div>
                  </>
                </Col>
              </Row>
            </>
            }
          </>
          }
      </div>
    </Container>
  </div>
  )
}

export default Checkout