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

const leerContenidoInicio = () => {
  const elementosALeer = [];

  // Seleccionamos semánticamente los elementos importantes
  const tituloResena = document.querySelector(".resena h1");
  const textoResena = document.querySelector(".resena p");
  const ubicacionTitulo = document.querySelector(".ubicacion-titulo");
  const ubicacionTexto = document.querySelector(".ubicacion-texto p");

  // Añadir al arreglo solo si existen
  if (tituloResena) elementosALeer.push(tituloResena.innerText);
  if (textoResena) elementosALeer.push(textoResena.innerText);
  if (ubicacionTitulo) elementosALeer.push(ubicacionTitulo.innerText);
  if (ubicacionTexto) elementosALeer.push(ubicacionTexto.innerText);

  // Verificamos si hay texto para leer
  if (elementosALeer.length === 0) {
    alert("No se encontró contenido accesible para leer.");
    return;
  }

  const textoCompleto = elementosALeer.join(". ");
  const mensaje = new SpeechSynthesisUtterance(textoCompleto);
  mensaje.lang = "es-MX"; // Español México
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
            onClick={leerContenidoInicio}
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
