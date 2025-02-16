import { useEffect, useState } from 'react'
import './Home.css'
import { Container } from 'react-bootstrap';
import JuegoCard from '../../JuegoCard/JuegoCard';
import Destacado from '../../Destacado/Destacado';




function Home() {

    const [juegos, setJuegos] = useState([])

    const URL = 'https://my-json-server.typicode.com/gomezivan94/Pay2WinDB/Juegos'

    useEffect(() =>{

        const fetchJuegos = async()=>{
            try {
                const response = await fetch(URL)
                const data = await response.json()
                setJuegos(data)
                console.log(data)

            } catch (error) {
                console.log(error)
            }
        }

        
            fetchJuegos()
            
    }, [])

    const juegosDestacados = juegos.filter((juego) => juego.Destacado === true)

    const juegosPorCategoria = juegos.reduce((acc, juego) => {
        if (!acc[juego.Type]) {
            acc[juego.Type] = []
        }
        acc[juego.Type].push(juego)
        return acc
    }, {})

    return (
        <div>
            {
                juegosDestacados.length > 0 && (
                    <Destacado juegosDestacados={juegosDestacados} />
                )
            }
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