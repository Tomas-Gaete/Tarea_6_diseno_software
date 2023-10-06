import React, { useState } from "react";
import "../contacto.css"; 

function FormularioContacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Asunto:", asunto);
    console.log("Mensaje:", mensaje);
    setNombre("");
    setCorreo("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <div className="formulario-contacto-container">
      <h2 className="formulario-contacto-title">Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} className="formulario-contacto-form">
        <div className="formulario-contacto-group">
          <label htmlFor="nombre">Nombre Completo:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="formulario-contacto-group">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="formulario-contacto-group">
          <label htmlFor="asunto">Asunto:</label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            required
          />
        </div>
        <div className="formulario-contacto-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="formulario-contacto-button">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default FormularioContacto;




