import './Checkout.css';
import { Link } from 'react-router-dom'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter';

const CheckoutItem = ( {id, name, img, price, quantity, cat, stock} ) => {

  return (
    <tr>
      <td className='checkout-detail__name'>
        <Link to={`/item/${id}`}><h3>{name}<br /> x{quantity}</h3></Link>
      </td>
      <td className='checkout-detail__price'>
        { useCurrencyConverter(price * quantity, 'CLP') }
      </td>
    </tr>
  )
}

export default CheckoutItem