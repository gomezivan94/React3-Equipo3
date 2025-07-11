import {Carousel, Card, Image} from 'react-bootstrap';
import './Destacado.css'
import { Link } from 'react-router-dom';


function Destacado({ juegosDestacados = [] }) {
  if (juegosDestacados.length === 0) {
    return <p>No hay juegos destacados</p>
  }

  return (
    <Carousel className=''>
      {juegosDestacados.map((juego) => (
        <Carousel.Item key={juego.id}>
          <Link to={`/juego/${juego.id}`} className="card-link" key={juego.id}>
          <Card className="destacado text-white">
            <Image className='slide-destacado img-fluid' src={juego.Header}  />
          </Card>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Destacado