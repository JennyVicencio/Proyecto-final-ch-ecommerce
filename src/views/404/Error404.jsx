import './Error404.css';
import cafeGif from './../../assets/img/coffee-waiting.gif'
import { ButtonContinue }  from '../../components/Buttons/Buttons';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Error404 = () => {

  return (
    <section className='error-404'>
      <Container>
        <div className="error-404__card">
          <div className='text-center'>
            <div className='display-1 fw-bolder text-secondary'>404</div>
            <h1 className='mb-4'>¡Oops! No se encontró lo que buscabas.</h1>
            <p className='text-uppercase fs-2'>Si ves esto borroso es porque te hace falta un café</p>
            <img src={cafeGif} alt="hay un café esperando por ti" className='img-fluid my-5' />
            <p className='fs-4'>Sigue buscando el café perfecto para ti:</p>
          </div>
          <Row className='justify-content-center g-3'>
            <Col xs={'auto'}>
              <Link to={"/"} role="button" className="btn btn-primary">Ir al inicio</Link>
            </Col>
            <Col xs={'auto'}>
              <ButtonContinue />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}

export default Error404