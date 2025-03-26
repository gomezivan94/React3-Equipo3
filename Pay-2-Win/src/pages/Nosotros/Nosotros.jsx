import React from 'react';
import "./Nosotros.css";
import maxi from"../AssetsPage/Maxi.jpg";
import Lautaro from"../AssetsPage/Lautaro.jpeg";
import Naty from"../AssetsPage/Naty.jpg";
import Ivan from"../AssetsPage/Ivan.jpg";
import Santi from "../AssetsPage/Santi.jpg";
import Matias from "../AssetsPage/Matias.jpg";
function Nosotros() {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card nosotros-card bg-dark">
      <img src={Lautaro} class="card-img-top" height={400} width={200} alt="..."></img>
      <div class="card-body">
        <h5 class=" Titulo card-title ">Lautaro Borges</h5>
        <p class="card-text">Me llamo Lautaro Borges Licciardi, tengo 22 años, estudié en la Escuela Normal y ahora estoy masterizando mis habilidades de programación. Me gusta jugar juegos, ir al gimnasio y hacer videos para las redes.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card nosotros-card bg-dark">
      <img src={Naty} class="card-img-top" height={400} width={200} alt="..."></img>
      <div class="card-body">
        <h5 class=" Titulo card-title ">Natividad Rodriguez</h5>
        <p class="card-text">Me llamo Natividad, tengo 34 años, soy Tecnica de Laboratorio, trabajo en una clinica, me gusta viajar, hacer trekking, el contacto con la naturaleza, amante del café, el chocolate y el vino, de vez en cuando suelo participar en talleres al respecto.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card nosotros-card bg-dark">
      <img src={maxi} class="card-img-top" height={400} width={200} alt="..."></img>
      <div class="card-body">
        <h5 class=" Titulo card-title ">Maxi Gamboa</h5>
        <p class="card-text">Me llamo Maximiliano Gamboa tengo 21 años estudio en la UNSTA (desarrollo de software),en la aticana curso de inglés ,me gusta jugar juego en la compu ,caminar y ir al gimnasio</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card nosotros-card bg-dark">
      <img src={Santi} class="card-img-top" height={400} width={200} alt="..."></img>
      <div class="card-body">
        <h5 class=" Titulo card-title ">Santiago Nieva Glembocki</h5>
        <p class="card-text">Santiago Nieva Glembocki, 22 años.
Actualmente, por cursar 5to año de Ing. En sistemas de Información.Me gusta hacer deporte, disfrutar con amigos y aprender cosas nuevas.</p>

      </div>
    </div>
  </div>
  <div class="col">
    <div class="card nosotros-card bg-dark">
      <img src={Ivan} class=" card-img-top" height={400} width={200} alt="..."></img>
      <div class="card-body">
        <h5 class=" Titulo card-title ">Iván Gomez</h5>
        <p class="card-text">Iván Gomez, 31 años, Soporte IT / Help Desk. Disfruto aprender tecnologias nuevas y jugar videojuegos</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card nosotros-card bg-dark">
      <img src={Matias} class="card-img-top" height={400} width={200} alt="..."></img>
      <div class="card-body">
        <h5 class=" Titulo card-title ">Matias Romano</h5>
        <p class="card-text">Me llamo Matias y tengo 40 años. Soy profesor de Ingles y dibujante. Trabajo en soporte tecnico de Personal, Cablevision y Fibertel hace 12 años. Amo la tecnologia y en especial, los videojuegos.</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Nosotros 
