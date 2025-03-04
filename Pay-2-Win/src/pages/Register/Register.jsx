import React, {useState, useEffect} from 'react'
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
import './Register.css'
import axios from 'axios';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';



function Register() {
  
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthDate, setBirthDate] = useState(null);
  const [pais, setPais] = useState('');
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    const fetchPaises = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const paisesList = response.data.map(pais => pais.name.common);
        paisesList.sort((a, b) => a.localeCompare(b));
        setPaises(paisesList);
      } catch (error) {
        console.error("Error al obtener los países:", error);
      }
    };
    fetchPaises();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (!nombre || !apellido || !email || !password || !confirmPassword || !pais || !birthDate) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, completa todos los campos requeridos.',
      });
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, ingresa un email válido.',
      });
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: 'error',
        text: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.',
      });
      return;
    }

    const generoSeleccionado = document.querySelector('select[aria-label="Default select example"]').value;
    if (generoSeleccionado === "Selecciona") {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, selecciona tu género.',
      });
      return;
    }

    
    if (pais === "Selecciona tu País") {
      Swal.fire({
        icon: 'error',
        text: 'Por favor, selecciona tu país.',
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        text: 'Las contraseñas no coinciden.',
      });
      return;
    }

    const birthDateObj = new Date(birthDate);
    if (isNaN(birthDateObj)) {
      Swal.fire({
        icon: 'error',
        text: 'La fecha de nacimiento no es válida.',
      });
      return;
    }

    const formattedDate = birthDateObj.toLocaleDateString();  

    
    const today = new Date();
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const month = today.getMonth() - birthDateObj.getMonth();

    
    if (month < 0 || (month === 0 && today.getDate() < birthDateObj.getDate())) {
      age--; 
    }

   
    if (age < 13) {
      Swal.fire({
        icon: 'error',
        text: 'Debes ser mayor de 13 años para registrarte.',
      });
      return;
    }

    const templateParams = {
      to_name: 'Admin',
      from_name: nombre, 
      message: `Usuario registrado con los siguientes datos: 
                Nombre: ${nombre} 
                Apellido: ${apellido}
                Email: ${email}
                País: ${pais}
                Fecha de nacimiento: ${formattedDate}`,
    };
    
    emailjs.send('service_68b7uy8', 'template_h3gn3pw', templateParams, '5FeQCGxt625DgpXbg')
      .then((response) => {
        console.log('Email enviado correctamente:', response);
        Swal.fire({
          icon: 'success',
          title: '¡Registrado exitosamente!',
          text: 'Bienvenido a Pay2Win!',
        });
      })
      .catch((error) => {
        console.error('Error al enviar el email:', error);
        if (error.response) {
          console.error('Detalles del error:', error.response.data); 
        }
        Swal.fire({
          icon: 'error',
          html: `
            Hubo un problema al realizar el registro. Inténtalo nuevamente. Si el problema persiste, ponte en contacto con nosotros.
            <br>
            <a href="/contacto">
              <button class="swal2-confirm swal2-styled" style="margin-top: 10px;">Contactanos</button>
            </a>
          `,
        });
      
      });

  
  };

  


  return (
    <div>
        <CustomNavbar/>
      
      
        <Container className="d-flex justify-content-center align-items-center mt-2 mb-2"
        style={{ minHeight: '100vh', marginTop: '-30px' }}>
          <Card className='card-registro' style={{ width: '100%', maxWidth: '800px' }}>
      <Card.Header as="h5">Registrate!</Card.Header>
      <Card.Body>
        <Card.Title>Completa con tus datos para formar parte de la mejor comunidad gamer!</Card.Title>
        <Card.Text>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="name" placeholder="Ingresa tu Nombre" value={nombre} 
    onChange={(e) => setNombre(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="name" placeholder="Ingresa tu Apellido" value={apellido} 
    onChange={(e) => setApellido(e.target.value)}  />
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
      <Form.Text className="text-muted">
          Debes tener mas de 13 años para poder registrarte.
        </Form.Text>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Genero</Form.Label>
        <Form.Select aria-label="Default select example">
      <option>Selecciona</option>
      <option value="1">Femenino</option>
      <option value="2">Masculino</option>
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPais">
        <Form.Label>País</Form.Label>
        <Form.Select
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          aria-label="Select a country"
        >
          <option>Selecciona tu País</option>
          {paises.length > 0 ? (
            paises.map((paisOption, index) => (
              <option key={index} value={paisOption}>
                {paisOption}
              </option>
            ))
          ) : (
            <option>Cargando países...</option>
          )}
        </Form.Select>
      </Form.Group>
      
   </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" value={email} 
    onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          No compartiremos tu Email con terceros
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" value={password} 
    onChange={(e) => setPassword(e.target.value)} />
        <Form.Text className="text-muted">
        La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Ingresa nuevamente la contraseña elegida</Form.Label>
        <Form.Control type="password" placeholder="Confirmar contraseña" value={confirmPassword} 
    onChange={(e) => setConfirmPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Recibir por email las ultimas actualizaciones." />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Registrarme
      </Button>
    </Form>
        </Card.Text>
        <Link to="/">
  <Button variant="secondary">Volver a Inicio</Button>
</Link>
      </Card.Body>
    </Card>
        </Container>
      
      
      <Footer/>
    </div>
  );
}

export default Register
