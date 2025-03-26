import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './JuegoDetalle.css'
import { JuegosContext } from '../../context/JuegosContext';  
import Destacado from '../../components/Destacado/Destacado';
import { useContext } from "react"

function JuegoDetalle() {
  const { id } = useParams();
  const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
  const juego = juegos.find((j) => j.id.toString() === id);
  const juegosDestacados = juegos.filter((juego) => juego.Destacado === true);
  
  

  if (!juego) {
    return <h1>Juego no encontrado</h1>;
  }

  return (
    <>
    <div>
        
      </div>
      <h1 className='text-white mt-1 text-center'>{juego.Title}</h1>
      <div className='text-white d-flex align-items-center justify-content-around'>
        <div className='d-flex flex-column align-items-center'>
          <video 
            alt={juego.Title} 
            style={{ width: '100%', height: 'auto' }} 
            autoPlay 
            muted 
            controls 
            loop
            className="video-responsive"
          >
            <source src={juego.Trailer} />
          </video>
          <p>{juego.Description}</p>
          <p>Categoría: {juego.Type}</p>
          <p>Precio: ${juego.Precio}</p>
          <Link className='btn btn-primary' to="*">Comprar</Link>
        </div>
      </div>
      <div><h3 className='text-white text-center mt-5 mb-3'>Seguir Explorando...</h3></div>
      <Destacado juegosDestacados={juegosDestacados} />
      <Footer />
    </>
  );
}

export default JuegoDetalle;