import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Eventos.css';

//Importación de imagenes de los eventos
import Evento1 from "../../imagenes/Eventos/Evento1.png";
import EventoEj from "../../imagenes/Eventos/EventoEj.png";

//Importación de los archivos (PDF o Imagen) de los eventos
import Evento1pdf from "../../descargas/DescEventos/Evento1.pdf";

const eventos = [
  { id: 1, titulo: 'eventos.titulos.evento1', imagen: Evento1, archivo: Evento1pdf },
  { id: 2, titulo: 'eventos.titulos.evento2', imagen: EventoEj, archivo: '/descargas/dos.pdf' },
  { id: 3, titulo: 'eventos.titulos.evento3', imagen: EventoEj, archivo: '/descargas/tres.pdf' },
  { id: 4, titulo: 'eventos.titulos.evento4', imagen: EventoEj, archivo: '/descargas/cuatro.pdf' },
  { id: 5, titulo: 'eventos.titulos.evento5', imagen: EventoEj, archivo: '/descargas/cinco.pdf' },
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
            <button onClick={() => setEventoActivo(evento)}>{t("eventos.ver")}</button>
          </div>
        ))}
      </div>

      {eventoActivo && (
        <div className="modal-overlay" onClick={() => setEventoActivo(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={eventoActivo.imagen} alt={t(eventoActivo.titulo)} />
            <a href={eventoActivo.archivo} download className="boton-descargar">
              {t("eventos.descargar")}
            </a>
            <button className="cerrar" onClick={() => setEventoActivo(null)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}