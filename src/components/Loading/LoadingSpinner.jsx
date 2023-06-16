import { Spinner } from 'react-bootstrap';

const LoadingSpinner = () => {
  return (
   <div className='loading-container text-center'>
      <span className="h1">Cargando</span>
      <div className='spinner-container mt-4'>
         <Spinner animation="border" variant="secondary" role="status" />
         <Spinner animation="grow" variant="dark" role="status" />
         <Spinner animation="border" variant="secondary" role="status" />
         <Spinner animation="grow" variant="dark" role="status" />
         <Spinner animation="border" variant="secondary" role="status" />
         <Spinner animation="grow" variant="dark" role="status" />
      </div>
   </div>
  )
}
export default LoadingSpinner