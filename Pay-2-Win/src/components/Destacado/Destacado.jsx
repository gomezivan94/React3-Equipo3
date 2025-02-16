import {Carousel, Card, Button, Image} from 'react-bootstrap';


function Destacado({ juegosDestacados = [] }) {
  if (juegosDestacados.length === 0) {
    return <p>No hay juegos destacados</p>
  }

  return (
    <Carousel className='m-4'>
      {juegosDestacados.map((juego) => (
        <Carousel.Item key={juego.id} className='my-2'>
          <Card className="text-center bg-dark text-white container d-flex flex-row" style={{ width: 'auto', margin: 'auto' }}>
            <Image className='object-fit-contain' src={juego.Header}  />
            <Card.Body className='mb-2 '>
              <Card.Title className='py-2'>{juego.Title}</Card.Title>
              <Card.Text className='mb-4 '>{juego.Description}</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Destacado
