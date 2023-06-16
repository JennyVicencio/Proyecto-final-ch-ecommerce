import './Cart.css';
import { Button } from 'react-bootstrap';
import { BsTrash } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';
import { useCurrencyConverter } from './../../hooks/useCurrencyConverter';

const CartItem = ( {id, name, img, price, quantity, cat, stock} ) => {
  const {removeItem} = useCartContext();

  return (
    <tr>
      <td className='cart-detail__img'>
        <img src={img} alt="imagen producto" />
      </td>
      <td className='cart-detail__name'>
        {/* <span className="text-muted">{item.id}</span> */}
        <Link to={`/item/${id}`}><h3>{name}</h3></Link>
        <span className="text-muted">{cat}</span>
        <span className='stock'>Quedan {stock}</span>
      </td>
      <td className='cart-detail__price'>{useCurrencyConverter(price, 'CLP')}</td>
      <td className='cart-detail__quantity'>
        <span>x{quantity}</span>
      </td>
      <td className='cart-detail__del'>
        <Button variant='danger' onClick={() => removeItem(id)}>
          <BsTrash />
        </Button>
      </td>
      <td className='cart-detail__price'>{useCurrencyConverter(price * quantity, 'CLP')}</td>
  </tr>
  )
}

export default CartItem