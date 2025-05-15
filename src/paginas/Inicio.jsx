import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Separar from "../componentes/Separador NavBar/Separador";
import "./estilos/Inicio.css";
import Carrusel from "../componentes/Carrusel/Carrusel";
import Eventos from "../componentes/Eventos/Eventos";
import Convocatorias from "../componentes/Convocatorias/Convocatorias";

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

      <div className="Inicio-Seccion_Dos">
        <Eventos />
      </div>

      <div className="Inicio-Seccion_Tres">
        <Convocatorias />
      </div>

      <div className="Inicio-Seccion_Cuatro">
        <h2 className="ubicacion-titulo">{t("ubicacion.titulo")}</h2>
        <div className="ubicacion-contenido">
          <div className="ubicacion-texto">
            <p>{t("ubicacion.direccion")}</p>
          </div>
          <div className="ubicacion-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.27409871622!2d-118.27082762065429!3d33.779419299999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd35d96391071d%3A0xf352969bdddb5f0f!2sFederaci%C3%B3n%20Nacional%20e%20International%20de%20Nayaritas%20en%20Estados%20Unidos!5e0!3m2!1ses-419!2smx!4v1744858181160!5m2!1ses-419!2smx"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Inicio;
