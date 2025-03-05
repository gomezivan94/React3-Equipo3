import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JuegosProvider } from './context/JuegosContext';
import {Home, Admin, JuegoDetalle, About, Contact, Error404, Register, Login} from './pages'
import ModalLogin from './components/ModalLogin/ModalLogin'
import ProtectedRoutes from './components/ProtectedRoutes'



function App() {



  return (
    <JuegosProvider> 
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
       
    </JuegosProvider>
  );
}



export default App;
