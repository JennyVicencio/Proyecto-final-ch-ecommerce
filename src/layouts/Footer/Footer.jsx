import logoCafe from './../../assets/img/logo-ecommerce-light.svg';
import './Footer.css';
import { Col, Container, Row } from 'react-bootstrap';
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

 const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, [currentYear])
  
  return (
    <footer className='footer' id='ct-footer'>
      <Container>
        <Row className='g-4'>
          <Col lg={5} className='me-auto'>
            <div className="footer-brand">
              <Link to="/">
                <img src={logoCafe} className="img-fluid" alt='logo ecommerce' />
                <span className='h2 ms-lg-3'>Coffee & Teas</span>
              </Link>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footer-links">
            <h4>Productos</h4>
              <ul>
                <li>
                  <NavLink to={"/category/cafe"} role="button">Café</NavLink>
                </li>
                <li>
                  <NavLink to={"/category/infusiones"} role="button">Infusiones</NavLink>
                </li>
                <li>
                  <NavLink to={"/category/accesorios"} role="button">Accesorios</NavLink>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={12} className='border-top border-color-light'>
            <div className="footer-disclaimer">
              <div className='cr'>
                <span>©{currentYear} Coffee & Teas. All Rights Reserved.</span>
              </div>
              <div className='author'>
                <span className='me-2'>Creado por Jennyfer Vicencio</span>
                <a href="https://www.linkedin.com/in/jennyfer-v-arce" target='_blank' rel='noopener noreferrer'>
                  <BsLinkedin className='m-2 fs-2' />
                </a>
                <a href="https://github.com/JennyVicencio" target='_blank' rel='noopener noreferrer'>
                  <BsGithub className='m-2 fs-2' />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer