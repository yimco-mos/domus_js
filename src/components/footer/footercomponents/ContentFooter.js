import React from "react";
import { Redes } from "./Redes";
import { Servicios } from "@/components/servicios/Servicios";
import { slogan } from "@/textos/misionvision.text";

export const ContentFooter = () => {
  const InfoAdi = ({ infoAdi }) => {
    return (
      <>
        <p className="ml-4 p-3 mr-4">{infoAdi}</p>
      </>
    );
  };

  return (
    <div className="content-footer justify-center block">


      <div className="tabs_footer justify-center">

        <div className="t_txt_footer px-4 gap-2 flex justify-center">
          <div className="logo-header justify-center text-yellow-400">
            <div className="logo-domus-header"></div>
          </div>
          <div className="txt_footer justify-center ">
            <p className="text-2xl w-36  " style={{fontFamily:'Playfair Display',textTransform:'capitalize'}}>
             "{slogan}"
            </p>
          </div>
        </div>

        <div className="servicios_info_footer px-4">
          <div className="tab_footer flex ml-8 mr-4">
            <div className="servicios_footer mb-8 justify-left">
              <h4 className="text-xl text-white mt-8 ">Servicios</h4>
              <ul className="block py-4"> 
              <Servicios /></ul>
            </div>
          </div>
        </div>



      <div className="mt-4 block justify-center p-4 gap-8 info_footer">
        <InfoAdi infoAdi="Cra. 56#17-44 " />
        <InfoAdi infoAdi="Bogotá D.C" />
        <InfoAdi infoAdi="321 949 92 71  " />
        <InfoAdi infoAdi="domuscolombia@hotmail.com" />
      </div>

      </div>


      <div id="contactos" className="redes_footer flex justify-center gap-6 ">
        <Redes
          link_red="https://www.facebook.com/fundacion.domuscolombia?mibextid=ZbWKwL"
          link_img="https://img.icons8.com/fluency/48/facebook.png"
        />

        <Redes
          link_red="https://www.instagram.com/fundomus?utm_source=qr&igsh=MWhneWhhcGdydHV3Zg=="
          link_img="https://img.icons8.com/fluency/48/instagram-new.png"
        />

        <Redes
          link_red="https://wa.me/3219499271"
          link_img="https://img.icons8.com/color/48/whatsapp--v1.png"
        />
        
      </div>

    </div>
  );
};
