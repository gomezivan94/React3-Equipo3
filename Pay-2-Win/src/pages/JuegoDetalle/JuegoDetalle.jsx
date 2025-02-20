import { useParams } from 'react-router-dom'

function JuegoDetalle({ juegos }) {
    const { id } = useParams()

    // Buscamos el juego con el ID que viene por URL
    const juego = juegos.find((j) => j.id.toString() === id)

    if (!juego) {
        return <h1>Juego no encontrado</h1>
    }

    return (
        <div className='text-white'>
            <h1>{juego.Title}</h1>
            <p>{juego.Description}</p>
            <img src={juego.Image} alt={juego.Title} style={{ width: '300px' }} />
            <p>Categoría: {juego.Type}</p>
            <p>Precio: ${juego.Price}</p>
        </div>
    )
}

export default JuegoDetalle