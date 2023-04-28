import { Badge, Button } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {

   return (
      <div className='cart-button'>
         <Button variant="primary" onClick={() => alert("¡Carrito vacío 🙍🏼‍♀️!")}>
            <BsFillCartFill className='me-2' />
            <Badge bg="secondary">0</Badge>
         </Button>
      </div>
   )
}
