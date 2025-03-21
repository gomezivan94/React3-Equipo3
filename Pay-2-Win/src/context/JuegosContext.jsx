import React, { createContext, useState, useEffect } from 'react';


export const JuegosContext = createContext();


export const JuegosProvider = ({ children }) => {
  const [juegos, setJuegos] = useState([]);

 
  useEffect(() => {
    const juegosGuardados = JSON.parse(localStorage.getItem('juegos')) || [];
    setJuegos(juegosGuardados);
  }, []);


  const agregarJuego = (nuevoJuego) => {
    setJuegos((prevJuegos) => {
      const juegosActualizados = [...prevJuegos, nuevoJuego];
      localStorage.setItem('juegos', JSON.stringify(juegosActualizados));
      return juegosActualizados;
    });
  };


  const editarJuego = (id, juegoEditado) => {
    setJuegos((prevJuegos) => {
      const juegosActualizados = prevJuegos.map((juego) =>
        juego.id === id ? { ...juego, ...juegoEditado } : juego
      );
      localStorage.setItem('juegos', JSON.stringify(juegosActualizados));
      return juegosActualizados;
    });
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
