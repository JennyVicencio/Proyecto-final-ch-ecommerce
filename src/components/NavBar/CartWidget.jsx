import { Badge, Button } from 'react-bootstrap';
import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {

   return (
      <div className='cart-button'>
         <Button variant="dark" onClick={() => alert("Carrito en construcción. 🙍🏼‍♀️")} href='#'>
            <BsFillCartFill className='me-2' />
            <Badge bg="tertiary">0</Badge>
         </Button>
      </div>
   )
}
