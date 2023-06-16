import './Buttons.css';
import { Button } from 'react-bootstrap';
import { BiArrowBack } from "react-icons/bi";
import { BsCart2, BsCartCheck, BsShopWindow, BsCartX, BsFillBagCheckFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCartContext } from './../../context/CartContext';

export const ButtonBack = () => {
  let navigate = useNavigate();

  return (
      <Button variant="black" onClick={() => navigate(-1)}>
         <BiArrowBack className='me-2' />
         Volver
      </Button>
   )
}

export const ButtonContinue = () => {
   return (
    <Link to={'/all'} className="btn btn-outline-primary btn-continue"><BsShopWindow className='me-2' />Ver todos los productos </Link>
    )
 }

export const ButtonCart = ({text}) => {
   return (
      <Link to={'/cart'} className="btn btn-outline-tertiary btn-cart mb-3"><BsCart2 className='me-2' />{text}</Link>
   )
}

export const ButtonClearCart = () => {
   const {clearCart} = useCartContext();

   return (
      <Button className="btn btn-clean-all" onClick={clearCart}><BsCartX className='me-2' /> Limpiar</Button>
    )
}

export const ButtonCheckout = () => {
   return (
      <Link to={'/checkout'} className="btn btn-secondary btn-checkout"><BsCartCheck className='me-2' />Finalizar compra</Link>
   )
}

export const ButtonOrder = () => {
   return (
      <Button variant='secondary' type='submit' className="btn-order"><BsFillBagCheckFill className='me-2' />Ordenar</Button>
   )
}

