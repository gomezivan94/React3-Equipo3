import { Button, Card } from "react-bootstrap"


function JuegoCard({juego}) {
  return (
    <Card style={{ width: '18rem' }} key={juego.id} className="bg-dark text-white">
    <Card.Img variant="top" src={juego.Header} className="fluid" />
    <Card.Body className="shadow">
      <Card.Title>{juego.Title}</Card.Title>
      <Card.Text>{juego.Description}</Card.Text>
      <Button variant="danger">Ver Juego</Button>
    </Card.Body>
  </Card>
  )
}

export default JuegoCard
