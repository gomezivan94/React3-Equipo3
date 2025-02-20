import './App.css'
import React from 'react';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import JuegoDetalle from './pages/JuegoDetalle/JuegoDetalle'

function App() {
  

  return (
    <>
    <Navbar/>
      
    <Home/>
      
    <Footer />
    </>
  )
}

export default App
