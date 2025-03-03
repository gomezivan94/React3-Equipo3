import { FaSignInAlt } from 'react-icons/fa';
import { Nav, Container, Navbar as BootstrapNavbar } from 'react-bootstrap';
import "./Navbar.css";
import logo from "../assets/img/logo.png";
import { useState } from 'react';
import ModalLogin from '../ModalLogin/ModalLogin';

function CustomNavbar() {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <BootstrapNavbar className='sticky-top navigator' data-bs-theme="dark">
      <Container>
        <BootstrapNavbar.Brand href="/"><img src={logo} alt="logo" width="150px"/></BootstrapNavbar.Brand>
        <Nav>
          <Nav.Link href="/"><span>Inicio</span></Nav.Link>
          <Nav.Link href="/about"><span>Nosotros</span></Nav.Link>
          <Nav.Link href="/contact"><span>Contacto</span></Nav.Link>
          <Nav.Link href="/admin"><span>Admin</span></Nav.Link>
          <Nav.Link href="/Register"><span>Register</span></Nav.Link>
          <Nav.Link onClick={handleShow}><FaSignInAlt className="icon-size" /></Nav.Link>
        </Nav>
        <ModalLogin show={show} handleClose={handleClose} />
      </Container>
    </BootstrapNavbar>
  );
}

export default CustomNavbar;