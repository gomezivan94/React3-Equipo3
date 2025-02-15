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


    return (
        <div>
            {
                juegosDestacados.length > 0 && (
                    <Destacado juegosDestacados={juegosDestacados} />
                )
            }
            <Container className='games-container'>
            
                    {
                        juegos.map((juego)=> (
                            <JuegoCard key={juego.id} juego={juego}/>
                            
                        ))

                    }
                </Container>
        </div>
    )
}

export default Home