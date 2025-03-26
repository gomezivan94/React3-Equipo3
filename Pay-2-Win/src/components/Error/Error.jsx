import error from '../assets/img/error404.png'
import './Error.css'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { JuegosContext } from '../../context/JuegosContext';  
import Destacado from '../../components/Destacado/Destacado';
import { useContext } from "react";

function Error() {
  const { juegos } = useContext(JuegosContext);
  const juegosDestacados = juegos.filter((juego) => juego.Destacado === true);

  return (
    <div>
  
      <div className="error-card-container">
        <Card className="text-center container errorcard">
          <Card.Body>
            <div>
              <img className="errorimg" src={error} alt="Error 404" />
            </div>
            <Card.Title>Ups! parece que tuvimos un problema</Card.Title>
            <Card.Text>
              Por favor sigue disfrutando de nuestra plataforma mientras lo solucionamos.
            </Card.Text>
            <Link to="/">
              <Button variant="secondary">Volver a Inicio</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Error