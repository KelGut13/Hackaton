import React from "react";
import "./estilos/Registro.css";

const Registro = () => {
  return (
    <div className="registro-container">
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
          <option value="mestiza">Mestiza</option>
          <option value="indigena">Indígena</option>
          <option value="afromexicana">Afromexicana</option>
          <option value="otra">Otra</option>
        </select>

        <button type="submit" className="registro-button">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Registro;