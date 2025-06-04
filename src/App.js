import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./componentes/NavBar/NavBar";
import Inicio from "./paginas/Inicio";
import Cursos from "./paginas/Cursos";
import Login from "./paginas/Login";
import Regsitro from "./paginas/Registro";
import Footer from "./componentes/Footer/Footer";
import "./i18n";
import "./paginas/estilos/variables.css";

const LanguageWrapper = () => {
  const { i18n } = useTranslation();
  const { lng } = useParams(); // Obtener idioma desde la URL

  // Si el idioma en la URL no es válido, redirigir al idioma correcto
  useEffect(() => {
    if (!["es", "en"].includes(lng)) {
      const savedLang = localStorage.getItem("lng") || i18n.language || "es";
      i18n.changeLanguage(savedLang);
      window.location.replace(`/${savedLang}`);
    } else {
      i18n.changeLanguage(lng); // Cambiar idioma si es válido
    }
  }, [lng, i18n]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="cursos" element={<Cursos />} />
        <Route path="login" element={<Login />} />
        <Route path="registro" element={<Regsitro />}/>
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${localStorage.getItem("lng") || "es"}`} replace />} />
        <Route path="/:lng/*" element={<LanguageWrapper />} />
        <Route path="*" element={<Navigate to={`/${localStorage.getItem("lng") || "es"}`} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
