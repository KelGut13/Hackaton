import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../Carrusel/Carrusel.css";
import carrusel1 from "../../imagenes/carrusel/img1_carrusel.jpg";
import carrusel2 from "../../imagenes/carrusel/img2_carrusel.jpg";


const Carrusel = () => {
  return (
    <div className="carrusel-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={carrusel1} alt="Evento de la comunidad Nayarita en California" />
            <span className="slide-tooltip">Evento de la comunidad Nayarita en California</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-wrapper">
            <img src={carrusel2} alt="Banner oficial de BEU México 2024" />
            <span className="slide-tooltip">Banner oficial de BEU México 2024</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrusel;
