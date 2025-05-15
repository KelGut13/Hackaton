import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Convocatorias.css';

//Importación de las imagens de convocatoria
import Conv1 from "../../imagenes/Convocatorias/Conv1.png";

//Importación de los archivos (PDF o Imagen) de los eventos
import Conv1pdf from "../../descargas/DescConv/Conv1.pdf";

const convocatorias = [
  { id: 1, titulo: 'convocatorias.titulos.conv1', imagen: Conv1, archivo: Conv1pdf },
  { id: 2, titulo: 'convocatorias.titulos.conv2', imagen: Conv1, archivo: '/descargas/conv2.pdf' },
  { id: 3, titulo: 'convocatorias.titulos.conv3', imagen: Conv1, archivo: '/descargas/conv3.pdf' },
  { id: 4, titulo: 'convocatorias.titulos.conv4', imagen: Conv1, archivo: '/descargas/conv4.pdf' },
  { id: 5, titulo: 'convocatorias.titulos.conv5', imagen: Conv1, archivo: '/descargas/conv5.pdf' },
];

export default function Convocatorias() {
  const [convocatoriaActiva, setConvocatoriaActiva] = useState(null);
  const { t } = useTranslation();

  return (
    <div className="convocatorias-section">
      <h2 className="titulo-convocatorias">{t("convocatorias.titulo")}</h2>
      <div className="tarjetas-container">
        {convocatorias.map(conv => (
          <div className="tarjeta-convocatoria" key={conv.id}>
            <img src={conv.imagen} alt={t(conv.titulo)} />
            <h3>{t(conv.titulo)}</h3>
            <button onClick={() => setConvocatoriaActiva(conv)}>{t("convocatorias.ver")}</button>
          </div>
        ))}
      </div>

      {convocatoriaActiva && (
        <div className="modal-overlay" onClick={() => setConvocatoriaActiva(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={convocatoriaActiva.imagen} alt={t(convocatoriaActiva.titulo)} />
            <a href={convocatoriaActiva.archivo} download className="boton-descargar">
              {t("convocatorias.descargar")}
            </a>
            <button className="cerrar" onClick={() => setConvocatoriaActiva(null)}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}
