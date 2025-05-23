import React, { useState } from "react";
import { Volume2 } from "lucide-react"; // o cualquier ícono similar

const Accesibilidad = () => {
  const [abierto, setAbierto] = useState(false);

  const leerTextoSeleccionado = () => {
    const texto = window.getSelection().toString().trim();
    if (!texto) {
      alert("Selecciona un texto visible para que pueda ser leído.");
      return;
    }
    const mensaje = new SpeechSynthesisUtterance(texto);
    speechSynthesis.speak(mensaje);
  };

  return (
    <div style={estilos.flotante}>
      <button onClick={() => setAbierto(!abierto)} style={estilos.boton}>
        ⚙️
      </button>

      {abierto && (
        <div style={estilos.menu}>
          <button
            onClick={leerTextoSeleccionado}
            title="Narrador (selecciona texto)"
            style={estilos.icono}
          >
            <Volume2 />
          </button>
        </div>
      )}
    </div>
  );
};

const estilos = {
  flotante: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 1000,
  },
  boton: {
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "20px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  },
  menu: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  icono: {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "8px",
    cursor: "pointer",
  },
};

export default Accesibilidad;
