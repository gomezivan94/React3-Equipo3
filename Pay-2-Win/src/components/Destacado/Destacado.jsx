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
        <Carousel.Item key={juego.id} className=''>
          <Link to={`/juego/${juego.id}`} className="card-link" key={juego.id}>
          <Card className="destacado text-white">
            <Image className='slide-destacado' src={juego.Header}  />
            <Card.Body className=''>
              <Card.Title className=''>{juego.Title}</Card.Title>
              <Card.Text className=' '>{juego.Description}</Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Destacado