import './ItemDetail.css';
import { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import { BsCart2 } from "react-icons/bs";

const ItemCount = ( {stock, onAdd} ) => {
   const [itemCounter, setItemCounter] = useState(1);

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
      <>
         <InputGroup size="sm" className="mb-4">
            <Button variant="primary" className="btn-minus" onClick={decrementCounter} disabled={itemCounter === 1}>-</Button>
            <Form.Control type="number" className="text-center" min={1} max={stock} value={itemCounter} onChange={e => setItemCounter(e.target.value)} />
            <Button variant="primary" className="btn-plus" onClick={incrementCounter} disabled={itemCounter === stock}>+</Button>
         </InputGroup>
         <Button variant="tertiary" className="btn-add mb-4" onClick={() => onAdd(itemCounter)} disabled={stock === 0}>
            <BsCart2 className='me-2' /><span>Agregar al carrito</span>
         </Button>
      </>
   )
}

export default ItemCount