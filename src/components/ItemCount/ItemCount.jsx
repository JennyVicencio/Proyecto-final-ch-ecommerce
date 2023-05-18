import { useState } from 'react';
import {Button, InputGroup, Form } from 'react-bootstrap';
import { BsCart2 } from "react-icons/bs";

const ItemCount = ( {initial, stock} ) => {
   const [itemCounter, setItemCounter] = useState(initial);

   const decrementCounter = () => {
      if(itemCounter > 1) {
         setItemCounter(itemCounter-1);
      }
   }
   const incrementCounter = () => {
      if(itemCounter < stock) {
         setItemCounter(itemCounter+1);
      }
   }

   return (
      <InputGroup size="sm" className="mb-4">
         <Button variant="tertiary" onClick={decrementCounter}>-</Button>
         <Form.Control type="number" className="text-center" value={itemCounter} onChange={e => setItemCounter(e.target.value)} />
         <Button variant="tertiary" onClick={incrementCounter}>+</Button>
         <Button variant="tertiary" className="btn-add" onClick={() => alert("¡Producto añadido al carrito!")}>
            <span>Agregar al carrito</span><BsCart2 className='ms-2' />
         </Button>
      </InputGroup>
      
   )
}

export default ItemCount