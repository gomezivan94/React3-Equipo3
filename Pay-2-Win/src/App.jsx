import './App.css'
<<<<<<< HEAD
import './hooks/useFetchJuegos'
import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { About, Admin, Contact, Error404, Login, Register, JuegoDetalle, Nosotros} from './pages';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import { useFetchJuegos as juegos } from './hooks/useFetchJuegos';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JuegosProvider } from './context/JuegosContext';
import {Home, Admin, JuegoDetalle, About, Contact, Error404, Register, Login} from './pages'
import ModalLogin from './components/ModalLogin/ModalLogin'
import ProtectedRoutes from './components/ProtectedRoutes'
import CustomNavbar from './components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './Firebase';

>>>>>>> ebef161dc2e08eed8c2233ba910442d3978bbd5a



function App() {

  const [user, loading] = useAuthState(auth);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => {
    setShowLoginModal(false);
    if (!user) {
      
      window.location.href = '/';
    }
  };

  
  useEffect(() => {
    if (!user && !loading && window.location.pathname === '/admin') {
      setShowLoginModal(true); 
    }
  }, [user, loading]);



  return (
<<<<<<< HEAD
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
=======
    <JuegosProvider> 
      <CustomNavbar openLoginModal={openLoginModal} />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/juego/:id" element={<JuegoDetalle />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<Error404/>}/>
          <Route path="/admin" 
          element={
            <ProtectedRoutes>
              <Admin/>
            </ProtectedRoutes>
          } />
        </Routes>
        <ModalLogin show={showLoginModal} handleClose={closeLoginModal} />
    </JuegosProvider>
  );
>>>>>>> ebef161dc2e08eed8c2233ba910442d3978bbd5a
}



export default App;
