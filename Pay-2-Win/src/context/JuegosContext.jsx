import React, { createContext, useState, useEffect } from 'react';
import { useFetchJuegos } from '../hooks/useFetchJuegos';

export const JuegosContext = createContext();

export const JuegosProvider = ({ children }) => {
  const url = "https://my-json-server.typicode.com/gomezivan94/Pay2WinDB/Juegos"; // Asegúrate de usar la URL correcta
  const { juegos: juegosAPI, loading, error } = useFetchJuegos(url);
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    // Si hay juegos en localStorage, los usa, si no, toma los de la API
    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    if (juegosGuardados.length > 0) {
      setJuegos(juegosGuardados);
    } else {
      setJuegos(juegosAPI);
    }
  }, [juegosAPI]);

  const agregarJuego = (nuevoJuego) => {
    const juegosActualizados = [...juegos, nuevoJuego];
    setJuegos(juegosActualizados);
    localStorage.setItem('juegos', JSON.stringify(juegosActualizados));
  };

  const editarJuego = (id, juegoEditado) => {
    const juegosActualizados = juegos.map((juego) =>
      juego.id === id ? { ...juego, ...juegoEditado } : juego
    );
    setJuegos(juegosActualizados);
    localStorage.setItem('juegos', JSON.stringify(juegosActualizados));
  };

  const eliminarJuego = (id) => {
    const juegosActualizados = juegos.filter((juego) => juego.id !== id);
    setJuegos(juegosActualizados);
    localStorage.setItem('juegos', JSON.stringify(juegosActualizados));
  };

  return (
    <JuegosContext.Provider value={{ juegos, loading, error, agregarJuego, editarJuego, eliminarJuego }}>
      {children}
    </JuegosContext.Provider>
  );
};
