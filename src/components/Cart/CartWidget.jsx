import { Badge } from 'react-bootstrap';
import { BsCart, BsCartFill } from "react-icons/bs";
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

 const CartWidget = () => {
   const { cart } = useContext(CartContext);
   
   return (
      <div className='cart-button'>
         <Link to={"/cart"} role="button" className="btn btn-dark">
            {
               cart.length > 0 ? <BsCartFill className='me-2' /> : <BsCart className='me-2' />
            }
            <Badge bg="tertiary">{cart.length}</Badge>
         </Link>
      </div>
   )
}
export default CartWidget