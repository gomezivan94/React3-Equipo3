import { useContext } from 'react';
import { JuegosContext } from '../../context/JuegosContext';  
import { Container } from 'react-bootstrap';
import JuegoCard from '../../components/JuegoCard/JuegoCard';
import Destacado from '../../components/Destacado/Destacado';
import { Link } from 'react-router-dom';
import './Home.css'
import CustomNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


function Home() {
  const { juegos } = useContext(JuegosContext);

  const juegosDestacados = juegos.filter((juego) => juego.Destacado === true);

  const juegosPorCategoria = juegos.reduce((acc, juego) => {
    if (!acc[juego.Type]) acc[juego.Type] = [];
    acc[juego.Type].push(juego);
    return acc;
  }, {});

  return (
    <div>
        <CustomNavbar/>
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
      <Footer/>
    </div>
  );
}

export default Home;
