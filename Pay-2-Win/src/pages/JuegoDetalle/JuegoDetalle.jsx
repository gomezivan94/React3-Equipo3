import { TbBackground } from 'react-icons/tb'
import { useParams } from 'react-router-dom'

function JuegoDetalle() {
    const { id } = useParams()

    const juegos = JSON.parse(localStorage.getItem('juegos')) || []

    const juego = juegos.find((j) => j.id.toString() === id)

    if (!juego) {
        return <h1>Juego no encontrado</h1>
    }

    return (
        <div className='container text-white justify-content-center align-items-center mt-5'>
            <h1>{juego.Title}</h1>
            <p>{juego.Description}</p>
            <video alt={juego.Title} style={{ width: '50vw', height: '75vh' }} autoPlay muted controls loop>
                <source src={juego.Trailer}/>
            </video>
            <p>Categoría: {juego.Type}</p>
            <p>Precio: ${juego.Price}</p>
        </div>
    )
}

export default JuegoDetalle