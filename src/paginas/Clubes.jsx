import React, { useState } from "react";
import Separar from "../componentes/Separador NavBar/Separador";
import { useTranslation } from "react-i18next";
import "./estilos/Clubes.css";
import clubesData from "../data/clubesData.js";

export default function Clubes() {
  const { t } = useTranslation();
  const [clubActivo, setClubActivo] = useState(null);

  return (
    <div className="clubes-section">
      <Separar />
      <h2 className="clubes-titulo">{t("clubs.titulo")}</h2>

      <div className="clubes-tarjetas-container">
        {clubesData.map((club) => (
          <div className="clubes-tarjeta" key={club.id}>
            <img src={club.imagen} alt={club.nombre} />
            <h3>{club.nombre}</h3>
            <button onClick={() => setClubActivo(club)}>
              {t("clubs.boton-mas-info")}
            </button>
          </div>
        ))}
      </div>

      {clubActivo && (
        <div className="clubes-modal-overlay" onClick={() => setClubActivo(null)}>
          <div className="clubes-modal" onClick={(e) => e.stopPropagation()}>
            <img src={clubActivo.imagen} alt={clubActivo.nombre} />
            <h3>{clubActivo.nombre}</h3>
            <p><strong>{t("clubs.presidente")}:</strong> {clubActivo.presidente}</p>
            <p><strong>{t("clubs.contacto.email")}:</strong> {clubActivo.correo}</p>
            <p><strong>{t("clubs.contacto.telefono")}:</strong> {clubActivo.telefono}</p>
            <button className="clubes-cerrar" onClick={() => setClubActivo(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}
