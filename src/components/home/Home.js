import React from "react";
import { Collage } from "./collage/Collage";
import { Programa } from "./programas/Programa";
import { Oracion } from "./oracion/Oracion";
import { Infundador } from "./fundador/Infundador";
import { Formulario } from "./formulario/Formulario";
import { Misionvision } from "./misionvision/Misionvision";
import "styles/home/home.css";
import { Eventos } from "./eventos/Eventos";
export const Home = () => {
  return (
    <section className="home_section">
      <section className="collage">
        <Collage />
      </section>
    
      <section className="fundador_sec">
        <Infundador />
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



      <section className="mision_vision">
        <Misionvision />
      </section>




    </section>
  );
};
