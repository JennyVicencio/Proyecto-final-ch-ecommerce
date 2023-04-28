import React from 'react';
import logoCafe from './../../img/logo-ecommerce.png'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { CartWidget } from './CartWidget';

const NavBar = () => {
  return (
   <>
      <Navbar expand="lg" bg="white" variant="light" className="shadow">
         <Container>
            <div className='navbar-brand'>
               <a href="/">
                  <img src={logoCafe} className="img-fluid" alt='logo ecommerce' />
               </a>
            </div>
            <Navbar.Collapse id="navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="/">Inicio</Nav.Link>
                  <Nav.Link href="#link">Productos</Nav.Link>
                  <Nav.Link href="#link">Nosotros</Nav.Link>
                  <Nav.Link href="#link">Contacto</Nav.Link>
               </Nav>
            </Navbar.Collapse>
            <CartWidget />
            <Navbar.Toggle aria-controls="navbar-nav" />
         </Container>
      </Navbar>
   </>
  )
}

export default NavBar