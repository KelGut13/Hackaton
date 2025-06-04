import React, { useState, useRef, useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import logo from "../../imagenes/logo.svg";
import mexicoFlag from "../../imagenes/mexicoFlag.svg";
import usaFlag from "../../imagenes/usaFlag.svg";
import "../NavBar/NavBar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);

  // Detectar si estamos en la página de inicio con idioma (ej. "/es" o "/en")
  const isHomePage = location.pathname === `/${lng}`;

  const changeLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("lng", newLang);

    const currentPath = location.pathname.substring(3); // Quitar "/es" o "/en"
    const newPath = currentPath ? `/${newLang}${currentPath}` : `/${newLang}`;
    navigate(newPath);
  };

  // Cierra el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const scrollThreshold = 100; // 👉 Ajusta esta distancia a tu gusto
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setShowNavbar(false);
        setMenuOpen(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= scrollThreshold) {
        setShowNavbar(true);
      }
  
      lastScrollY = currentScrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  
  return (
    <nav className={`navbar ${showNavbar ? "visible" : "hidden"}`} ref={menuRef}>
      <div className="container">
        <Link to={`/${lng || ""}`}>
          <img src={logo} alt="Logo" className="logo" />
        </Link>

        {/* Menú principal */}
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          {!isHomePage && (
            <li><Link to={`/${lng}`} onClick={() => setMenuOpen(false)}>{t("navbar.inicio")}</Link></li>
          )}
          <li><Link to={`/${lng}/cursos`} onClick={() => setMenuOpen(false)}>{t("navbar.cursos")}</Link></li>
          
          <li className="language">
            <span>{t("navbar.language")}:</span>
            <button onClick={() => changeLanguage("es")} className="flag-button">
              <p>Español</p>
            </button>
            <button onClick={() => changeLanguage("en")} className="flag-button">
              <p>Wixárika</p>
            </button>
          </li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "light" ? "🌙 " + t("navbar.darkmode") : "☀️ " + t("navbar.lightmode")}
            </button>
          </li>
          <li><Link to={`/${lng}/login`} onClick={() => setMenuOpen(false)}>{t("navbar.login")}</Link></li>
          <li></li>
        </ul>

        {/* Botón de menú para móviles */}
        <button className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
