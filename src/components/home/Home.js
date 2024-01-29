import React from "react";
import { Collage } from "./collage/Collage";
import { Infundador } from "./fundador/Infundador";
import { Formulario } from "./formulario/Formulario";
import "styles/home/home.css";
export const Home = () => {
  return (
    <section className="home_section">
      <div className="collage">
        <Collage />
      </div>
    
      <div className="fundador_sec">
        <Infundador />
      </div>

        <div className="formulario_voluntariado">
        <Formulario />
      </div>
    </section>
  );
};
