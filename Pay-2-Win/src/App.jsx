import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { JuegosProvider } from './context/JuegosContext';
import {Home, Admin, JuegoDetalle, About, Contact, Error404, Register, Login} from './pages'

function App() {
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
        </Routes>
    </JuegosProvider>
  );
}

export default App;
