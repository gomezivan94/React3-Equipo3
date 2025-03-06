import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { Nav, Container, Navbar as BootstrapNavbar } from 'react-bootstrap';
import "./Navbar.css";
import logo from "../assets/img/logo.png";
import { useState, useEffect } from 'react';
import ModalLogin from '../ModalLogin/ModalLogin';
import { auth, signOut } from '../../Firebase';

function CustomNavbar({ openLoginModal }) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((currentUser) => {
    setUser(currentUser); 
  });

  return () => unsubscribe();
}, []);

const handleLogout = async () => {
  try {
    await signOut(auth); 
    setUser(null); 
  } catch (error) {
    console.error("Error al cerrar sesión", error);
  }
};

  return (
  <BootstrapNavbar expand="lg" className='sticky-top navigator' data-bs-theme="dark">
    <Container>
      <BootstrapNavbar.Brand href="/"><img src={logo} alt="logo" width="150px"/></BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/"><span>Inicio</span></Nav.Link>
          <Nav.Link href="/about"><span>Nosotros</span></Nav.Link>
          <Nav.Link href="/contact"><span>Contacto</span></Nav.Link>
          <Nav.Link href="/admin"><span>Admin</span></Nav.Link>
          {!user ? (
            <Nav.Link onClick={handleShow}><FaSignInAlt className="icon-size" /> Iniciar sesión</Nav.Link>
          ) : (
            <Nav.Link onClick={handleLogout}><FaSignOutAlt className="icon-size" /> Cerrar sesión</Nav.Link>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
      <ModalLogin show={show} handleClose={handleClose} />
    </Container>
  </BootstrapNavbar>
);
}

export default CustomNavbar;