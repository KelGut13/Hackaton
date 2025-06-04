import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Eventos.css';

import Img1 from "../../imagenes/Clubs/descarga-500x500.jpg";
import Img2 from "../../imagenes/Clubs/Carpinteria-500x500.jpg";
import Img3 from "../../imagenes/Clubs/Electricista-500x500.jpg";
import Img4 from "../../imagenes/Clubs/Fontanero-500x500.jpg";
import Img5 from "../../imagenes/Clubs/marmoleo-500x500.jpg";

const eventos = [
  { id: 1, titulo: 'eventos.titulos.evento1', imagen: Img1, archivo: '/descargas/uno.pdf' },
  { id: 2, titulo: 'eventos.titulos.evento2', imagen: Img2, archivo: '/descargas/dos.pdf' },
  { id: 3, titulo: 'eventos.titulos.evento3', imagen: Img3, archivo: '/descargas/tres.pdf' },
  { id: 4, titulo: 'eventos.titulos.evento4', imagen: Img4, archivo: '/descargas/cuatro.pdf' },
  { id: 5, titulo: 'eventos.titulos.evento5', imagen: Img5, archivo: '/descargas/cinco.pdf' },
];

export default function Eventos() {
  const [eventoActivo, setEventoActivo] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="eventos-section">
      <h2 className="titulo-eventos">{t("eventos.titulo")}</h2>
      <div className="tarjetas-container">
        {eventos.map(evento => (
          <div className="tarjeta-evento" key={evento.id}>
            <img src={evento.imagen} alt={t(evento.titulo)} />
            <h3>{t(evento.titulo)}</h3>
            <div className="tooltip-wrapper">
              <button onClick={() => setEventoActivo(evento)}>
                {t("eventos.ver")}
              </button>
              <span className="tooltip-text">{t("eventos.tooltipVer")}</span>
            </div>
          </div>
        ))}
      </div>

      {eventoActivo && (
        <div className="modal-overlay" onClick={() => setEventoActivo(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={eventoActivo.imagen} alt={t(eventoActivo.titulo)} />
            <div className="tooltip-wrapper">
              <a href={eventoActivo.archivo} download className="boton-descargar">
                {t("eventos.descargar")}
              </a>
              <span className="tooltip-text">{t("eventos.tooltipDescargar")}</span>
            </div>
            <button className="cerrar" onClick={() => setEventoActivo(null)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}
