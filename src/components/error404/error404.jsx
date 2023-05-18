import './error404.css';
import { Container } from 'react-bootstrap';

const error404 = ( {msg} ) => {
  return (
    <section className='error-404'>
      <Container>  
          <h1>{msg}</h1>
      </Container>
    </section>
  )
}

export default error404