import React, { useState, useEffect, useContext } from 'react';
import { JuegosContext } from '../../context/JuegosContext';
import { useFetchJuegos } from '../../hooks/useFetchJuegos';
import { Container, Row, Col } from 'react-bootstrap'; 
import JuegoCard from '../../components/JuegoCard/JuegoCard';
import GameCarousel from '../../components/JuegoCard/GameCarousel'; 
import Destacado from '../../components/Destacado/Destacado';
import { Link } from 'react-router-dom';
import './Home.css';
import Footer from '../../components/Footer/Footer';

function Home() {
  const url = "https://my-json-server.typicode.com/gomezivan94/Pay2WinDB/Juegos";
  const { juegos: juegosAPI, loading, error } = useFetchJuegos(url);
  const { juegos: juegosContext, setJuegos } = useContext(JuegosContext);

  const [juegos, setLocalJuegos] = useState([]);

  useEffect(() => {
    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    if (juegosGuardados.length > 0) {
      setLocalJuegos(juegosGuardados);
    } else {
      setLocalJuegos(juegosAPI);
      localStorage.setItem('juegos', JSON.stringify(juegosAPI));
    }
  }, [juegosAPI]);

  useEffect(() => {
    if (juegos.length > 0) {
      localStorage.setItem('juegos', JSON.stringify(juegos));
    }
  }, [juegos]);

  const juegosDestacados = juegos.filter((juego) => juego.Destacado === true);

  const juegosPorCategoria = juegos.reduce((acc, juego) => {
    if (!acc[juego.Type]) acc[juego.Type] = [];
    acc[juego.Type].push(juego);
    return acc;
  }, {});

  return (
    <div id='Arriba'>
      {juegosDestacados.length > 0 && <Destacado juegosDestacados={juegosDestacados} />}

      {Object.entries(juegosPorCategoria).map(([categoria, juegosDeCategoria]) => (
        <div key={categoria}>
          <h2 className="text-white px-4 col-md-4">{categoria}</h2>

          <div className="d-block d-md-none">
            <GameCarousel games={juegosDeCategoria} />
          </div>

          <Container className="games-container d-none d-md-block">
            <Row>
              {juegosDeCategoria.map((juego) => (
                <Col key={juego.id} md={4} className="mb-4">
                  <Link to={`/juego/${juego.id}`} className="card-link">
                    <JuegoCard juego={juego} />
                  </Link>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ))}
      <button className='btn btn-light sticky-bottom'><a href="#Arriba">🔝</a></button>

      <Footer />
    </div>
  );
}

export default Home;