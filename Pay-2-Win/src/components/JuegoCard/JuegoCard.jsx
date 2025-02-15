import { Card } from "react-bootstrap"


function JuegoCard({juego}) {
  return (
    <Card style={{ width: '18rem' }} key={juego.id} className="bg-dark text-white shadow gameCard">
    <Card.Img variant="top" src={juego.Header} className="fluid" />
    <Card.Body className="shadow text-center">
      <Card.Title>{juego.Title}</Card.Title>
      <Card.Text>{juego.Description}</Card.Text>
    </Card.Body>
  </Card>
  )
}

export default JuegoCard
