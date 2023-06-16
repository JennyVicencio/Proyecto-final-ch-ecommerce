import './Checkout.css';
import CheckoutItem from './CheckoutItem';
import { Table } from 'react-bootstrap';
import { useCartContext } from '../../context/CartContext';
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter';

const CartDetail = () => {
  const {cart, getTotalPrice } = useCartContext();
  
  return (
    <Table responsive hover>
      <tbody>
        { cart.map(item => <CheckoutItem key={item.id} {...item} />)}
          <tr>
            <td className='checkout-detail__delivery'>Envío:</td>
            <td className='checkout-detail__delivery'><span title='¡Por inauguración te lo enviamos gratis!'>¡GRATIS!</span></td>
          </tr>
          <tr className='border-top border-2 border-dark'>
            <td className='checkout-detail__total'>Total:</td>
            <td className='checkout-detail__total'><span>{useCurrencyConverter(getTotalPrice(), 'CLP')}</span></td>
          </tr>
        </tbody>
    </Table>
  )
}

export default CartDetail;
