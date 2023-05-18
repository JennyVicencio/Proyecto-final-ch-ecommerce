import React from 'react';
import './NavBar.css';
import logoCafe from './../../assets/img/logo-ecommerce.svg'
import { Container, Navbar, Nav } from 'react-bootstrap';
import { CartWidget } from './CartWidget';
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
   return (
      <>
         <Navbar expand="lg" bg="white" variant="light" className="shadow">
            <Container>
               <div className='navbar-brand'>
                  <Link to="/">
                     <img src={logoCafe} className="img-fluid" alt='logo ecommerce' />
                  </Link>
               </div>
               <div className="navbar-buttons order-lg-2">
                  <Navbar.Toggle aria-controls="navbar-nav" />
                  <CartWidget />
               </div>
               <Navbar.Collapse id="navbar-nav">
                  <Nav className="me-auto">
                     <NavLink to={"/"} role="button" className="nav-link">Inicio</NavLink>
                     <NavLink to={"/category/cafe"} role="button" className="nav-link">Café</NavLink>
                     <NavLink to={"/category/infusiones"} role="button" className="nav-link">Infusiones</NavLink>
                     <NavLink to={"/category/accesorios"} role="button" className="nav-link">Accesorios</NavLink>
                     <NavLink to={"/contacto"} role="button" className="nav-link">Contacto</NavLink>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}

export default NavBar