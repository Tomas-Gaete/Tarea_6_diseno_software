import React from "react";
import imagen1 from "../img/img1.jpg"; 
import imagen2 from "../img/img2.jpg"; 
function Objectivos() {
  
  const contentStyle = {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
    flexDirection: "row", 
    textAlign: "center",
  };

  const imagenStyle = {
    width: "200px", 
    height: "auto", 
    margin: "0 10px", 
  };

  return (
    <div className="content shadow">
      <h2 className="title">Objetivos del Grupo</h2>
      <p>
        Nuestros objetivos son aprender del desarrollo front-end por medio de la
        materia enseñada en este curso para en el día de mañana ser capaces de
        desarrollar nuestra propia plataforma web en base a algún futuro
        emprendimiento que queramos desarrollar, para lo cual tenemos que aprobar
        este ramo con el mejor rendimiento posible y adquirir la mayor cantidad
        de conocimientos que podamos.
      </p>
      <div style={contentStyle}>
        <img src={imagen1} alt="Imagen 1" style={imagenStyle} />
        <img src={imagen2} alt="Imagen 2" style={imagenStyle} />
      </div>
    </div>
  );
}

export default Objectivos;
