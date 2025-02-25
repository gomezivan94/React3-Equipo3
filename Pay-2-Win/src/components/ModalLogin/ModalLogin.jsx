import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "./ModalLogin.css"




const ModalLogin = ({show, handleClose}) => {

return (
    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Inicia Sesion</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            autoFocus
          />
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Inserte su contraseña"
            autoFocus
          />
        </Form.Group>
        <Button variant="secondary" onClick={handleClose}>
        Log In
      </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer className='text-center' >
    <div className='text-start'><h5>Aun no tienes cuenta? Que estas esperando? Registrate y comenzá a disfrutar de los mejores juegos en linea!!!</h5></div>
      <Button variant="secondary" onClick={handleClose}>
        Registrarse
      </Button>
    </Modal.Footer>
  </Modal>
);








};




export default ModalLogin;