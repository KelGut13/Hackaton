import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../Carrusel/Carrusel.css";
import carrusel1 from "../../imagenes/carrusel/img1_carrusel.jpg";
import carrusel2 from "../../imagenes/carrusel/Bannereumx.svg";


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
          <img src={carrusel1} alt="Imagen 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carrusel2} alt="Imagen 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrusel;
