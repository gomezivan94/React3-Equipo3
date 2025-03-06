import './App.css'
import './hooks/useFetchJuegos'
import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { About, Admin, Contact, Error404, Login, Register, JuegoDetalle, Nosotros} from './pages';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import { useFetchJuegos as juegos } from './hooks/useFetchJuegos';



function App() {
  

  return (
    <>
    <Navbar/>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/juego/:id' element={<JuegoDetalle juegos={juegos} />} />
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='*' element={<Error404/>}/>
    <Route path='/Nosotros' element={<Nosotros/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
