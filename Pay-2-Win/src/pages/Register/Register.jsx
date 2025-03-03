import React, {useState} from 'react'
import Footer from '../../components/Footer/Footer';
import CustomNavbar from '../../components/Navbar/Navbar';
import { useContext } from 'react';
import { JuegosContext } from '../../context/JuegosContext';  
import { Container } from 'react-bootstrap';
import Destacado from '../../components/Destacado/Destacado';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Register() {
  const { juegos } = useContext(JuegosContext);

  const juegosDestacados = juegos.filter((juego) => juego.Destacado === true);

  const [birthDate, setBirthDate] = useState(null);

  


  return (
    <div>
        <CustomNavbar/>
      {juegosDestacados.length > 0 && <Destacado juegosDestacados={juegosDestacados} />}
      
        <Container className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh', marginTop: '-30px' }}>
          <Card className='card-registro' style={{ width: '100%', maxWidth: '800px' }}>
      <Card.Header as="h5">Registrate!</Card.Header>
      <Card.Body>
        <Card.Title>Completa con tus datos para formar parte de la mejor comunidad gamer!</Card.Title>
        <Card.Text>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Ingresa tu Nombre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="name" placeholder="Ingresa tu Apellido" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBirthDate">
      <Form.Label>Fecha de Nacimiento</Form.Label>
      <div><DatePicker
        selected={birthDate}
        onChange={(date) => setBirthDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Fecha de nacimiento"
        className="form-control"
      /></div>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Genero</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Selecciona</option>
      <option value="1">Femenino</option>
      <option value="2">Masculino</option>
    </Form.Select>
      </Form.Group>
      
   </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingresa nuevamente la contraseña elegida</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recibir por email las ultimas actualizaciones." />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Registrarme
      </Button>
    </Form>
        </Card.Text>
        <Button variant="primary">Volver a Inicio</Button>
      </Card.Body>
    </Card>
        </Container>
      
      
      <Footer/>
    </div>
  );
}

export default Register
