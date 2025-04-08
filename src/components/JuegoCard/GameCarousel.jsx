import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import { Navigation, Pagination } from 'swiper/modules'; 
import JuegoCard from './JuegoCard'; 
import { Link } from 'react-router-dom'; 
import './GameCarousel.css';

const GameCarousel = ({ games }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]} 
      spaceBetween={10} 
      slidesPerView={1} 
      navigation 
      pagination={{ clickable: true }} 
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 }, 
      }}
    >
      {games.map((juego) => (
        <SwiperSlide key={juego.id}>
          <Link to={`/juego/${juego.id}`} className="card-link">
            <JuegoCard juego={juego} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GameCarousel;