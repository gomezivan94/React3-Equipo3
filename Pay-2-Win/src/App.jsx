import './App.css'
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
}



export default App;
