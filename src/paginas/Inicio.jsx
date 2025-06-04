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

      <div className="Inicio-Seccion_Uno">
        <div className="facebook">
          <div className="facebook-container">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/Nayaritas"
              data-tabs="timeline"
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="false"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/Nayaritas"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/Nayaritas">FENINE</a>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="espaciador"></div>

        <div className="resena">
            <h1>{t("inicio.titulo-resena")}</h1>
            <p>
                {t("inicio.texto-resena")}
            </p>
        </div>
      </div>

      <div className="video-container">
        <video width="640" height="360" controls className="video">
          <source src={video} type="video/mp4"/>
        </video>
      </div>

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
