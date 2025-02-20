import './App.css'
import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import { About, AboutGame, Admin, Contact, Error404, Login, Register} from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/aboutgame' element={<AboutGame/>}/>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='*' element={<Error404/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
