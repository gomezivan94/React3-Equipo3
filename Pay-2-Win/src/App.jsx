import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JuegosProvider } from './context/JuegosContext';
import {Home, Admin, JuegoDetalle, About, Contact, Error404, Register, Login} from './pages'
import ModalLogin from './components/ModalLogin/ModalLogin';
import ModalRegistro from './components/ModalRegistro/ModalRegistro';
import { useState } from 'react';


function App() {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

 
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleShowRegister = () => setShowRegister(true);
  const handleCloseRegister = () => setShowRegister(false);

  return (
    <JuegosProvider> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/juego/:id" element={<JuegoDetalle />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<Error404/>}/>
          <Route path='/login' element={<Login handleShowLogin={handleShowLogin} />} />
          <Route path='/register' element={<Register handleShowRegister={handleShowRegister} />} />
        </Routes>
        <ModalLogin 
          show={showLogin} 
          handleClose={handleCloseLogin} 
          handleShowRegister={handleShowRegister} 
        />
        <ModalRegistro 
          show={showRegister} 
          handleClose={handleCloseRegister} 
        />
    </JuegosProvider>
  );
}



export default App;
