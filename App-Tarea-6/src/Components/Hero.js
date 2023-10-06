import React from "react";

function Hero(){
    return(
      <section className="hero">
      <div className="contenido-hero">
          <h2>Entregable N°2: Nuestra página.</h2>
          <div className="location">
              <p><a href="https://www.uai.cl/">UAI</a></p>
              <a href="https://tablericons.com/">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-desktop" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
                      <path d="M7 20h10" />
                      <path d="M9 16v4" />
                      <path d="M15 16v4" />
                  </svg>
              </a>
          </div>
      </div>    
  </section>
    )
  }

export default Hero;