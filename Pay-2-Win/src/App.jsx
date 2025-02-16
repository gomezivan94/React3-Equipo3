import './App.css'
import React from 'react';
import Footer from './components/Footer/Footer';
import Games from './components/Games/Games';
import Home from './components/pages/Home/Home';
import Navbar from "./components/Navbar/Navbar";

function App() {
  

  return (
    <>
    <Games 
    />
    <Navbar/>
    
    <Home/>
    
    <Footer />
    </>
  )
}

export default App
