import React from "react";
import "./estilos/Registro.css";
import Separar from "../componentes/Separador NavBar/Separador";
import fondo from '../videos/fondo.mp4.mp4';

const Registro = () => {
  return (
    <div className="registro-container">
      {/* Video de fondo */}
      <video autoPlay loop muted className="video-fondo">
        <source src={fondo} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Capa superpuesta para oscurecer un poco el fondo si deseas */}
      <div className="overlay"></div>

      {/* Contenido principal del formulario */}
      <form className="registro-form">
        <h2 className="registro-title">Registro</h2>

        <label className="registro-label">Nombres</label>
        <input type="text" className="registro-input" />

        <div className="registro-row">
          <div className="registro-half">
            <label className="registro-label">Primer apellido</label>
            <input type="text" className="registro-input" />
          </div>
          <div className="registro-half">
            <label className="registro-label">Segundo apellido</label>
            <input type="text" className="registro-input" />
          </div>
        </div>

        <div className="registro-row">
          <div className="registro-half">
            <label className="registro-label">Edad</label>
            <input type="number" className="registro-input" />
          </div>
          <div className="registro-half">
            <label className="registro-label">Sexo</label>
            <select className="registro-input">
              <option value="">Selecciona</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="O">Otro</option>
            </select>
          </div>
        </div>

        <label className="registro-label">CURP</label>
        <input type="text" className="registro-input" />
        <p className="registro-curp-link">
          ¿No recuerdas tu CURP?{" "}
          <a href="https://www.gob.mx/curp/" target="_blank" rel="noopener noreferrer">
            Consultar CURP Aquí
          </a>
        </p>

        <label className="registro-label">Etnia</label>
        <select className="registro-input">
          <option value="">Selecciona</option>
          <option value="mestiza">Coras</option>
          <option value="indigena">Wixarikas</option>
          <option value="afromexicana">Mexicaneros</option>
          <option value="mestizos">Mestizos</option>
        </select>

        <button type="submit" className="registro-button">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Registro;
