import React, {useRef} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./ModalLogin.css";
import Swal from 'sweetalert2';
import ModalRegitro from '../ModalRegistro/ModalRegistro';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword } from '../../Firebase';
import { FaGoogle } from 'react-icons/fa';





const ModalLogin = ({show, handleClose}) => {
 
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
  
        Swal.fire({
          icon: 'success',
          text: `Bienvenido ${user.displayName}! Has iniciado sesión con Google!`,
        });
        handleClose();
      } catch (error) {
        Swal.fire({
          icon: 'error',
          text: error.message,
        });
      }
    };
  

    const handleLogin = async () => {
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

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: 'success',
        text: 'Bienvenido! Has iniciado sesión!',
      });
      handleClose();
    } catch (error) {
      Swal.fire({
        icon: 'error',
        html: `
            El email no corresponde a ningun usuario. Si no tienes una cuenta, resgistrate.
            <br>
            <a href="/register">
              <button class="swal2-confirm swal2-styled" style="margin-top: 10px;">Registrarse</button>
            </a>
          `,
      });
    }
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
            placeholder="Ingresa tu Email"
            autoFocus
          />
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Ingresa tu contraseña"
            autoFocus
          />
        </Form.Group>
        <div><Button variant="secondary" onClick={handleLogin}>
        Inicia Sesion
      </Button></div>
      <div className='mt-2'> <Button variant="secondary" onClick={handleGoogleLogin}> <FaGoogle style={{ marginRight: '8px' }} />
        Inicia Sesion con Google
      </Button></div>
        
     

      </Form>
    </Modal.Body>
    <Modal.Footer className='text-center' >
    <div className='text-start'><h5>Aun no tienes cuenta? Que estas esperando? Registrate y comenzá a disfrutar de los mejores juegos en linea!!!</h5></div>

    <div className='d-flex justify-content-center w-100'><Button variant="secondary" onClick={handleRegister}>
        Registrarse
      </Button></div>
      
    </Modal.Footer>
  </Modal>
  

  
);








};




export default ModalLogin;