import React, { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './ResetPass.css';
import { auth, sendPasswordResetEmail } from '../../Firebase'; 
import Footer from '../../components/Footer/Footer';
import CustomNavbar from '../../components/Navbar/Navbar';
import { JuegosContext } from '../../context/JuegosContext';  
import Destacado from '../../components/Destacado/Destacado';
import Swal from 'sweetalert2'; 

function ResetPass() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');  
  const [loading, setLoading] = useState(false);

const { juegos } = useContext(JuegosContext);
const juegosDestacados = juegos.filter((juego) => juego.Destacado === true);

const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: 'error',
        title: '¡Oops!',
        text: 'Por favor, ingresa un email válido.',
      });
      return;
    }

    setLoading(true);  

    try {
      await sendPasswordResetEmail(auth, email);  

      Swal.fire({
        icon: 'success',
        title: '¡Correo enviado!',
        text: 'Te hemos enviado un correo para restablecer tu contraseña.',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al intentar enviar el correo. Intenta nuevamente.',
      });
      console.error(error);  
    } finally {
      setLoading(false);  
    }
  };


  return (
    <div>
      <Destacado juegosDestacados={juegosDestacados} />
      <Container className="d-flex justify-content-center align-items-center mt-2 mb-2"
        style={{ minHeight: 'auto', marginTop: '20px' }}>
        <Card className="card-reset" style={{ width: '100%', maxWidth: '800px' }}>
          <Card.Header as="h5">Recupera tu Cuenta</Card.Header>
          <Card.Body>
            <Card.Title>Ingresa tu email para recuperar tu cuenta</Card.Title>
            <Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Ingresa tu email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                  />
                  <Form.Text className="text-muted">
                    Te enviaremos instrucciones para recuperar tu cuenta.
                  </Form.Text>
                </Form.Group>
                <div className="d-flex">
                  <Button variant="secondary" type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar'}
                  </Button>
                </div>
              </Form>
            </Card.Text>
            <div className="d-flex justify-content-center mt-3">
              <Link to="/">
                <Button variant="secondary">Volver a Inicio</Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </div>
  );
}

export default ResetPass;