import React from "react";
import { Collage } from "./collage/Collage";
import { Programa } from "./programas/Programa";
import { servicios, serviciosImagenes } from "@/textos/misionvision.text";
import "styles/home/home.css";

export const Home = () => {
  const Servicio = () => {
    return (
      <>
        {servicios.map((servicio, index) => (
          <div className="list-none text-neutral-950" key={index}>
            <li>{servicio}</li>
            <span className="img_servicio">
              <img
                src={`/fundacion/${serviciosImagenes[index]}`}
                alt={servicio}
                style={{
                  ...(index === servicios.length - 1 ? { float: 'left' } : {}), // Aplica estilo a la última imagen
                  ...(index === 3 ? { marginTop: '20px' } : {}) // Aplica estilo a la cuarta imagen
                }}
              />
            </span>
          </div>
        ))}
      </>
    );
  };

  return (
    <section className="home_section">
      <section className="collage justify-center">
        <Collage />
      </section>

      <div className="seervis justify-center">
        <Servicio />
      </div>

      <div className="sec_programas justify-center">
        <Programa />
      </div>
    </section>
  );
};
