
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-md-end">
            <p className="mb-0">Todos los derechos reservados</p>
          </Col>

          <Col className="text-end">
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-white me-3"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-white me-3"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="text-white"
            >
              <FaYoutube size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
