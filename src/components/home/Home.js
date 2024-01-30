import React from "react";
import { Collage } from "./collage/Collage";
import { Programa } from "./programas/Programa";
import { Infundador } from "./fundador/Infundador";
import { Formulario } from "./formulario/Formulario";
import "styles/home/home.css";
export const Home = () => {
  return (
    <section className="home_section">
      <section className="collage">
        <Collage />
      </section>
    
      <section className="fundador_sec">
        <Infundador />
      </section>

        <div className="sec_programas justify-center">
          <Programa/>
        </div>


        <section className="formulario_voluntariado">
        <Formulario />
      </section>




    </section>
  );
};
