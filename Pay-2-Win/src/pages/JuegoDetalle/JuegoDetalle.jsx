import { Link, useParams } from 'react-router-dom'
import CustomNavbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


function JuegoDetalle() {
    const { id } = useParams();
    const juegos = JSON.parse(localStorage.getItem('juegos')) || [];
    const juego = juegos.find((j) => j.id.toString() === id);
  
    if (!juego) {
      return <h1>Juego no encontrado</h1>;
    }
  
    return (
      <>
      <CustomNavbar/>
        <h1 className='text-white mt-5'>{juego.Title}</h1>
        <div className='text-white d-flex align-items-center justify-content-around'>
          <div className='px-2 mt-1'>
            <video alt={juego.Title} style={{ width: '50vw', height: '75vh'}} autoPlay muted controls loop>
              <source src={juego.Trailer} />
            </video>
          </div>
          <div className='d-flex flex-column align-items-start'>
            <img src={juego.Header} alt="Portada" width={'70%'} height={'50%'}/>
            <p>{juego.Description}</p>
            <p>Categoría: {juego.Type}</p>
            <p>Precio: ${juego.Precio}</p>
            <Link className='btn btn-primary' to="*">Comprar</Link>
          </div>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default JuegoDetalle;