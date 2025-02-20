
import { Nav, Container, Navbar as BootstrapNavbar } from 'react-bootstrap';
import "./Navbar.css"
function CustomNavbar() {
  return (
    <BootstrapNavbar className= 'fixed-top navigator p-4' data-bs-theme="dark">
      <Container>
        <BootstrapNavbar.Brand href="#inicio">Navbar</BootstrapNavbar.Brand>
        <Nav>
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#login">Login</Nav.Link>
          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Container>
    </BootstrapNavbar>
  );
}

export default CustomNavbar;
