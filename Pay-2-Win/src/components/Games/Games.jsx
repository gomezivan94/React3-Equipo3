import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Games.css'
import { Container } from 'react-bootstrap';

function Games() {

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

        return () => {
            fetchJuegos([])
        }
    }, [])


    return (
        <div>
            <Container className='games-container '>
                    {
                        juegos.map((juego)=> (
                            <Card style={{ width: '18rem' }} key={juego.id}>
                                <Card.Img variant="top" src={juego.Header}/>
                                <Card.Body className='shadow'>
                                    <Card.Title>{juego.Title}</Card.Title>
                                    <Card.Text>
                                    {juego.Description}
                                    </Card.Text>
                                    <Button variant="danger" className=''>Ver Juego</Button>
                                </Card.Body>
                            </Card>
                        ))

                    }
                </Container>
        </div>
    )
}

export default Games