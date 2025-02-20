import {Carousel, Card, Image, Button} from 'react-bootstrap';
import './Destacado.css'


function Destacado({ juegosDestacados = [] }) {
  if (juegosDestacados.length === 0) {
    return <p>No hay juegos destacados</p>
  }

  return (
    <Carousel className='mt-4 destacado'>
      {juegosDestacados.map((juego) => (
        <Carousel.Item key={juego.id} className='my-2 slide-destacado'>
          <Card className="text-center bg-dark text-white d-flex flex-row card-destacado" style={{ width: 'auto', margin: '2%' }}>
            <Image className='object-fit-contain' src={juego.Header}  />
            <Card.Body className='mb-2 m-4 d-flex flex-column align-items-center justify-content-around'>
              <Card.Title className='py-2'>{juego.Title}</Card.Title>
              <Card.Text className='mb-4 '>{juego.Description}</Card.Text>
              <Button className=''>Ver Juego</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Destacado
