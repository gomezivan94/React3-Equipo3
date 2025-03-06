import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Nosotros from "../AssetsPage/Nosotros.webp";
function About() {
  return (
    <div className="about">
      <div className='container my-5'>
        <div className='row'>
          <div className='col-lg-6 d-flex justify-content-center d-none d-lg-flex'>
            <img src={Nosotros} alt="Nosotros" />
          </div>
          
          <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center'>
            <h1 className=' Titulo text-light'> Somos Mejores que Steam</h1>
            
            <h4  className=' mb-5 ms-4 text-light'>Si estas pensando en jugar, estas pensando en nosotros</h4>
            <Link to="/Nosotros">
              <button className='btn btn-primary  btn-lg' href="/Nosotros">Más sobre Nosotros</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;