import './Cart.css';
import CartItem from './CartItem';
import { Table } from 'react-bootstrap';
import { useCartContext } from './../../context/CartContext';
import { useCurrencyConverter } from './../../hooks/useCurrencyConverter';

const CartDetail = () => {
  const {cart, getTotalPrice } = useCartContext();
  console.log('Cart: ', cart);

  return (
    <Table responsive hover>
      <tbody>
        { cart.map(item => <CartItem key={item.id} {...item} />)}
        <tr>
          <td colSpan="5" className='cart-detail__delivery'>Envío:</td>
          <td colSpan="1" className='cart-detail__delivery'><span title='¡Por inauguración te lo enviamos gratis!'>¡GRATIS!</span></td>
        </tr>
        <tr className='border-top border-2 border-dark'>
          <td colSpan="5" className='cart-detail__total'>Total:</td>
          <td colSpan="1" className='cart-detail__total'><span>{useCurrencyConverter(getTotalPrice(), 'CLP')}</span></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default CartDetail;
