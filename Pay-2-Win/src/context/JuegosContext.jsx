// src/context/JuegosContext.jsx
import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const JuegosContext = createContext();

// Proveedor de contexto
export const JuegosProvider = ({ children }) => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    setJuegos(juegosGuardados);
  }, []);

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
    <JuegosContext.Provider value={{ juegos, agregarJuego, editarJuego, eliminarJuego }}>
      {children}
    </JuegosContext.Provider>
  );
};
