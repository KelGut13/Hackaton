import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Separar from "../componentes/Separador NavBar/Separador";
import "./estilos/Inicio.css";
import Carrusel from "../componentes/Carrusel/Carrusel";
import Eventos from "../componentes/Eventos/Eventos";
import Convocatorias from "../componentes/Convocatorias/Convocatorias";
import Accesibilidad from "../componentes/Accesibilidad/Accesibilidad.jsx";
import video from "../videos/videofenine.mp4";

const Inicio = () => {

    const { t } = useTranslation();

  useEffect(() => {
    // Cargar el SDK de Facebook solo una vez
    if (!window.FB) {
      const script = document.createElement("script");
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v22.0";
      document.body.appendChild(script);
    } else {
      // Si ya está cargado, reanaliza el widget
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="Container-Inicio">
      <Separar />
      <Carrusel />

      <div className="Inicio-Seccion_Dos">
        <Eventos />
      </div>

      <div className="Inicio-Seccion_Tres">
        <Convocatorias />
      </div>
      <Accesibilidad />
    </div>
  );
}

export default Inicio;
