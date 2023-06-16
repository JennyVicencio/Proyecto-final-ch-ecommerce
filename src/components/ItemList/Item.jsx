import './ItemList.css';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useCurrencyConverter } from './../../hooks/useCurrencyConverter';

const Item = ( {id, name, img, price, desc, cat, stock} ) => {

  return (
    <Col md={6} lg={4} xl={3}>
      <div className="card-producto">
        <div className='card-producto-inner'>
          <div className="card__bg">
            <Card.Img variant="top" src={img} />
            <div className="card-details__price shadow">{useCurrencyConverter(price, 'CLP')}</div>
          </div>
          <div className='card-details'>
            <h3 className='card-details__name'>{name} </h3>
            <Link to={`/category/${cat}`} className='card-details__cat'>#{cat}</Link>
            <div>
              <span className='card-details__stock'>
              {stock < 6 ? `¡Quedan solo ${stock}!` : `${stock} existencias`}
              </span>
            </div>
          </div>
        </div>
        <div className="card-producto-hover">
          <div className="card-details">
            <div className="card-details__price">{useCurrencyConverter(price, 'CLP')}</div>
            <p className="card-details__desc">{desc}</p>
            <Link to={`/item/${id}`} className="btn btn-lg btn-primary">Ver detalles</Link>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default Item