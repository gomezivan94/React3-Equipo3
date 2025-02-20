import { useEffect, useState } from 'react'

export const useFetchJuegos = (url) => {
    const [juegos, setJuegos] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url)
                if (!response.ok) throw new Error('Error al obtener los datos')
                const data = await response.json()
                setJuegos(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        const timer = setTimeout(() => {
            fetchData()
        }, 2000)

        return () => clearTimeout(timer)
    }, [url])

    return { juegos, loading, error }
}