import React from "react";
import { Collage } from "./collage/Collage";
import { Programa } from "./programas/Programa";
import "styles/home/home.css";
import { Eventos } from "./eventos/Eventos";
export const Home = () => {
  return (
    <section className="home_section">
      <section className="collage justify-center">
        <Collage />
      </section>
    
   

        <div className="sec_programas justify-center">
          <Programa/>
        </div>




      <section className="eventos_sec">
    <Eventos/>

      </section>






    </section>
  );
};
