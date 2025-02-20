import './Home.css'
import { Container } from 'react-bootstrap'
import JuegoCard from '../../components/JuegoCard/JuegoCard'
import Destacado from '../../components/Destacado/Destacado'
import { useFetchJuegos } from '../../hooks/useFetchJuegos'

function Home() {
    const URL = 'https://my-json-server.typicode.com/gomezivan94/Pay2WinDB/Juegos'
    const { juegos, loading, error } = useFetchJuegos(URL)

    const juegosDestacados = juegos.filter((juego) => juego.Destacado === true)

    const juegosPorCategoria = juegos.reduce((acc, juego) => {
        if (!acc[juego.Type]) acc[juego.Type] = []
        acc[juego.Type].push(juego)
        return acc
    }, {})

    if (loading) return <div className='d-flex justify-content-center align-items-center py-5 mt-5'><div className='spinner-border text-light' role='status'></div></div>
    if (error) return <h1>Error: {error}</h1>

    return (
        <div>
            {juegosDestacados.length > 0 && <Destacado juegosDestacados={juegosDestacados} />}
            {Object.entries(juegosPorCategoria).map(([categoria, juegosDeCategoria]) => (
                <div key={categoria}>
                    <h2 className='text-white px-4'>{categoria}</h2>
                    <Container className='games-container'>
                        {juegosDeCategoria.map((juego) => (
                            <JuegoCard key={juego.id} juego={juego} />
                        ))}
                    </Container>
                </div>
            ))}
        </div>
    )
}

export default Home