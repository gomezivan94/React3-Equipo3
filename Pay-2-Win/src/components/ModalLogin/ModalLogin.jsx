import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./ModalLogin.css";
import Swal from 'sweetalert2';
import ModalRegitro from '../ModalRegistro/ModalRegistro';
import { useNavigate } from 'react-router-dom';





const ModalLogin = ({show, handleClose}) => {
 
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleLogin = () => {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      if (!email) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor ingresa tu email', 
      });
      return;
    }
    if (!password) {
      Swal.fire ({
        icon: 'error',
        text: 'Por favor ingresa tu contraseña'
      });
      return;
    }
    Swal.fire ({
      icon: 'success',
      text: 'Bienvenido! Has iniciado sesion!',
    });
    handleClose(); 
    };
   
    const handleRegister = () => {
      navigate('/register');
     
      handleClose(); 
    };

 

return (
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Inicia Sesion</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="Emailform">
          <Form.Label>Email</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="name@example.com"
            autoFocus
          />
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Inserte su contraseña"
            autoFocus
          />
        </Form.Group>
        <Button variant="secondary" onClick={handleLogin}>
        Log In
      </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer className='text-center' >
    <div className='text-start'><h5>Aun no tienes cuenta? Que estas esperando? Registrate y comenzá a disfrutar de los mejores juegos en linea!!!</h5></div>
      <Button variant="secondary" onClick={handleRegister}>
        Registrarse
      </Button>
    </Modal.Footer>
  </Modal>
  

  
);








};




export default ModalLogin;