import React, { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const JuegosContext = createContext();

// Proveedor de contexto
export const JuegosProvider = ({ children }) => {
  const [juegos, setJuegos] = useState([]);

  // Cargar juegos desde localStorage al montar el contexto
  useEffect(() => {
    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    setJuegos(juegosGuardados);
  }, []);

  // Función para agregar un nuevo juego
  const agregarJuego = (nuevoJuego) => {
    const juegosActualizados = [...juegos, nuevoJuego];
    setJuegos(juegosActualizados);
    localStorage.setItem('juegos', JSON.stringify(juegosActualizados));
  };

  // Función para editar un juego existente
  const editarJuego = (id, juegoEditado) => {
    const juegosActualizados = juegos.map((juego) =>
      juego.id === id ? { ...juego, ...juegoEditado } : juego
    );
    setJuegos(juegosActualizados);
    localStorage.setItem('juegos', JSON.stringify(juegosActualizados));
  };

  // Función para eliminar un juego
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
