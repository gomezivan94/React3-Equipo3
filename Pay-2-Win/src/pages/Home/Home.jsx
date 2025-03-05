import React, { useState, useEffect, useContext } from 'react';
import { JuegosContext } from '../../context/JuegosContext';  
import { useFetchJuegos } from '../../hooks/useFetchJuegos';
import { Container } from 'react-bootstrap';
import JuegoCard from '../../components/JuegoCard/JuegoCard';
import Destacado from '../../components/Destacado/Destacado';
import { Link } from 'react-router-dom';
import './Home.css';
import CustomNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function Home() {
  const url = "https://my-json-server.typicode.com/gomezivan94/Pay2WinDB/Juegos"; // Cambia esta URL
  const { juegos: juegosAPI, loading, error } = useFetchJuegos(url);
  const { juegos: juegosContext, setJuegos } = useContext(JuegosContext);

  const [juegos, setLocalJuegos] = useState([]);
  
  // Cargar juegos desde localStorage si están disponibles
  useEffect(() => {
    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    if (juegosGuardados.length > 0) {
      setLocalJuegos(juegosGuardados);  // Si hay juegos guardados, usarlos
    } else {
      // Si no, utilizar los juegos de la API
      setLocalJuegos(juegosAPI);
      localStorage.setItem('juegos', JSON.stringify(juegosAPI));  // Guardar en localStorage
    }
  }, [juegosAPI]);

  // Actualizar juegos en localStorage cuando cambia el estado
  useEffect(() => {
    if (juegos.length > 0) {
      localStorage.setItem('juegos', JSON.stringify(juegos)); // Actualizar localStorage con los juegos actuales
    }
  }, [juegos]);

  const juegosDestacados = juegos.filter((juego) => juego.Destacado === true);
  
  const juegosPorCategoria = juegos.reduce((acc, juego) => {
    if (!acc[juego.Type]) acc[juego.Type] = [];
    acc[juego.Type].push(juego);
    return acc;
  }, {});

  return (
    <div>
      
      {juegosDestacados.length > 0 && <Destacado juegosDestacados={juegosDestacados} />}
      {Object.entries(juegosPorCategoria).map(([categoria, juegosDeCategoria]) => (
        <div key={categoria}>
          <h2 className="text-white px-4 col-md-4">{categoria}</h2>
          <Container className="games-container">
            {juegosDeCategoria.map((juego) => (
              <Link to={`/juego/${juego.id}`} className="card-link" key={juego.id}>
                <JuegoCard juego={juego} />
              </Link>
            ))}
          </Container>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default Home;
