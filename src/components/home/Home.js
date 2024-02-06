import React from "react";
import { Programa } from "./programas/Programa";
import { servicios, serviciosImagenes } from "@/textos/misionvision.text";
import "styles/home/home.css";
import { PrincipalInfo } from "./principalinfo/PrincipalInfo";
import { targets } from "@/textos/textos.txt";
import { TextoPrincipal } from "./principalinfo/TextoPrincipal";

export const Home = () => {
  const Servicio = () => {
    return (
      <div
        className=" grid grid-cols-3 gap-2 mt-8 justify-items-center serv_content"
        style={{
          gridAutoRows: "auto",
          placeItems: "center",
          gridAutoFlow: "row dense",
        }}
      >
        {servicios.map((servicio, index) => (
          <div className="list-none text-neutral-950 targ_serv" key={index}>
            <ul>
              <li>{servicio}</li>
              <span className="img_serv" style={{ position: "relative" }}>
                <img
                  style={{
                    WebkitFilter:
                      "blur(2px) brightness(66%) contrast(128%) grayscale(7%)",
                    filter:
                      "blur(1px) brightness(66%) contrast(128%) grayscale(7%)",
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
    <div className="home_section">

       
       <div className="control_txt_prin">
          <TextoPrincipal/>
        </div>

      <div className="prin_info flex space-x-4 mb-4">
        <PrincipalInfo
          link_dire="/ayudemos"
          link_img="https://img.icons8.com/dotty/84/helping-hand.png"
          txt_targ="ayudemos"
          p_targ={targets.ayudemos}
        />
        <PrincipalInfo
          link_dire="/ayudemos"
          link_img="https://img.icons8.com/wired/84/volunteering.png"
          txt_targ="voluntario"
          p_targ={targets.voluntarios}
        />
        <PrincipalInfo
          link_dire="/eventos"
          link_img="https://img.icons8.com/external-line-vectorslab/84/external-Schedule-business-and-finance-line-vectorslab.png"
          txt_targ="eventos"
          p_targ={targets.eventos}
        />
      </div>
      
      


      <div className="servi_content justify-center">
        <Servicio />
      </div>
      <div className="sec_programas justify-center">
        <Programa />
      </div>
    </div>
  );
};
