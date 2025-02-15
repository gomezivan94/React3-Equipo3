import {Carousel, Card, Button, Image} from 'react-bootstrap';


function Destacado({ juegosDestacados = [] }) {
  if (juegosDestacados.length === 0) {
    return <p>No hay juegos destacados</p>
  }

  return (
    <Carousel>
      {juegosDestacados.map((juego) => (
        <Carousel.Item key={juego.id} className='p-4 mb-3'>
          <Card className="text-center bg-dark text-white container d-flex flex-row" style={{ width: 'auto', margin: 'auto' }}>
            <Image src={juego.Header} />
            <Card.Body>
              <Card.Title>{juego.Title}</Card.Title>
              <Card.Text>{juego.Description}</Card.Text>
              <Button className='mb-3' variant="danger">Ver Juego</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Destacado
