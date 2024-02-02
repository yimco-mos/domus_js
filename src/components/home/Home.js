import React from "react";
import { Collage } from "./collage/Collage";
import { Programa } from "./programas/Programa";
import { servicios, serviciosImagenes } from "@/textos/misionvision.text";
import "styles/home/home.css";

export const Home = () => {
  const Servicio = () => {
    return (
      <div className=" grid grid-cols-3 gap-2 mt-8 justify-items-center serv_content" style={{ gridAutoRows: 'auto', placeItems: 'center', gridAutoFlow: 'row dense' }}>
        {servicios.map((servicio, index) => (
          <div className="list-none text-neutral-950 targ_serv" key={index}>
            <ul>
              <li>{servicio}</li>
              <span className="img_serv" style={{ position: 'relative' }}>
                <img
                  style={{
                    WebkitFilter: 'blur(2px) brightness(66%) contrast(128%) grayscale(7%)',
                    filter: 'blur(1px) brightness(66%) contrast(128%) grayscale(7%)',
                  }}
                  src={`/fundacion/${serviciosImagenes[index]}`}
                  alt={`servicio de ${servicio}`}
                />
              </span>
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="home_section">
      <section className="collage justify-center">
        <Collage />
      </section>





      <div className="servi_content justify-center">
        <Servicio />
      </div>

      <div className="sec_programas justify-center">
        <Programa />
      </div>
      
    </section>
  );
};
