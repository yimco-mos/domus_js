import React from "react";
import { Collage } from "./collage/Collage";
import { Programa } from "./programas/Programa";
import { Oracion } from "./oracion/Oracion";
import { Formulario } from "./formulario/Formulario";
import "styles/home/home.css";
import { Eventos } from "./eventos/Eventos";
export const Home = () => {
  return (
    <section className="home_section">
      <section className="collage justify-center">
        <Collage />
      </section>
    
      <section className="oracion_sec">
    <Oracion />

    </section>

        <div className="sec_programas justify-center">
          <Programa/>
        </div>


        <section className="formulario_voluntariado">
        <Formulario />
      </section>


      <section className="eventos_sec">
    <Eventos/>

      </section>






    </section>
  );
};
