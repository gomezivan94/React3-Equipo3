
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <footer
      className="bg-dark text-light py-4"   
    >
      <Container fluid className="px-5">
        <Row className="justify-content-between">
            <Col md={4} className="text-center mt-1">
            <img src={logo} />
            <p>No somos una copia de Steam.</p>
          </Col> 
          <Col className='text-center mt-5' >
            <small>
              &copy; {new Date().getFullYear()} Pay2Win. Todos los
              derechos reservados.
            </small>
          </Col>    
          <Col md={4} className="text-center mt-3">
            <h5>Síguenos</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://www.facebook.com/" target='_blank' className="text-primary redes">
                <FaFacebook size={25} />
              </a>
              <a href="https://www.instagram.com/" target='_blank' className="text-primary redes">
                <FaInstagram size={25} />
              </a>
              <a href="https://www.youtube.com/" target='_blank' className="text-primary redes">
                <FaYoutube size={25} />
              </a>
            </div>
          </Col>   
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;