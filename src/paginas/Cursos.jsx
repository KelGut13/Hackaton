import React, { useState } from "react";
import Separar from "../componentes/Separador NavBar/Separador";
import { useTranslation } from "react-i18next";
import "./estilos/Cursos.css";
import clubesData from "../data/clubesData.js";
import Accesibilidad from "../componentes/Accesibilidad/Accesibilidad.jsx";

export default function Cursos() {
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

      <Accesibilidad/>

    </div>
  );
  
}