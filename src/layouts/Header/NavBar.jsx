import logoCafe from './../../assets/img/logo-ecommerce-dark.svg'
import './Header.css';
import CartWidget from '../../components/Cart/CartWidget';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
   return (
      <>
         <Navbar expand="lg" variant="light" className="shadow">
            <Container>
               <div className='navbar-brand'>
                  <Link to="/">
                     <img src={logoCafe} className="img-fluid" alt='logo ecommerce' />
                  </Link>
               </div>
               <div className="navbar-buttons order-lg-2">
                  <Navbar.Toggle aria-controls="navbar-nav" className='border-0 p-1' />
                  <CartWidget />
               </div>
               <Navbar.Collapse id="navbar-nav">
                  <Nav className="me-auto">
                     <NavLink to={"/"} role="button" className="nav-link">Inicio</NavLink>
                     <NavLink to={"/all"} role="button" className="nav-link">Productos</NavLink>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}

export default NavBar