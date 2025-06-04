import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../imagenes/logo.svg";
import "../Footer/Footer.css"; // Archivo de estilos

const Footer = () => {
  const { t } = useTranslation();
  const { lng } = useParams();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Sección de la empresa */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />
          <p>{t("footer.descripcion")}</p>
        </div>

        {/* Enlaces rápidos */}
        <div className="footer-links">
          <h3>{t("footer.enlaces")}</h3>
          <ul>
            <li><a href="https://www.nayarit.gob.mx/">{t("footer.gob_nayarit")}</a></li>
            <li><a href="https://www.gob.mx/">{t("footer.gob_mexico")}</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <h3>{t("footer.siguenos")}</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Derechos de autor y leyenda de desarrollador */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {t("footer.derechos")}</p>
        <p className="developer">
          {t("footer.desarrollado")} <a href="#" target="_blank" rel="noopener noreferrer" className="keycapsoft">Navegantes Web</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
