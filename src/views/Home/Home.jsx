import BgBanner from './../../assets/img/Brown Modern Banner.jpg'
import './Home.css';
import ItemListContainer from './../../components/ItemList/ItemListContainer';
import { Image } from 'react-bootstrap';

const Home = () => {
   return (
      <>
         <section className='banner-home' role='banner'>
            <div className="banner-bg">
               <Image src={BgBanner} />
            </div>
            <div className="banner-text">
               <h1>Coffee & Teas</h1>
               <p>Entra en el mundo del café y las infusiones con nosotros</p>
            </div>
         </section>
         <ItemListContainer title='Explora nuestros productos' />
      </>
   )
}

export default Home