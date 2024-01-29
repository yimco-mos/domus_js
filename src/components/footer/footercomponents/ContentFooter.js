import React from "react";
import { Redes } from "./Redes";
import { Servicios } from "./Servicios";

export const ContentFooter = () => {
  const InfoAdi = ({ infoAdi }) => {
    return (
      <>
        <p className="ml-4 mr-4">{infoAdi}</p>
      </>
    );
  };

  return (
    <div className="content-footer justify-center block">
      <div className="tabs_footer justify-center flex">
        <div className="t_txt_footer p-1 gap-2 w-56 block justify-left">
          <div className="logo-header justify-left text-yellow-400">
            <div className="logo-domus-header"></div>
          </div>
          <div className="txt_footer justify-left w-64">
            <p className="text-xs w-36 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
              quidem eos inventore nihil amet maiores minima repellendus quae
              cumque sunt iusto.
            </p>
          </div>
        </div>

        <div className="servicios_info_footer justify-center   ">
          <div className="tabs_footer flex ml-8 mr-4">
            <div className="servicios_footer mb-8 justify-left">
              <h4 className="text-xl mt-8 ">Servicios</h4>
              <ul className="block py-4">
                <Servicios servicio="educacion" />
                <Servicios servicio="Acompañamiento abuelas" />
                <Servicios servicio="Trabajo social " />
                <Servicios servicio="Psicología " />
                <Servicios servicio="Artes" />
                <Servicios servicio="olla de la misericordia" />
              </ul>
            </div>

            <div className="servicios_footer mb-8 justify-left">
              <h4 className="text-xl mt-8 ">Eventos</h4>
              <ul className="block py-4">
                <Servicios servicio="educacion" />
                <Servicios servicio="Acompañamiento abuelas" />
                <Servicios servicio="Trabajo social " />
                <Servicios servicio="Psicología " />
                <Servicios servicio="Artes" />
                <Servicios servicio="olla de la misericordia" />
              </ul>
            </div>

            <div className="servicios_footer mb-8 justify-left">
              <h4 className="text-xl mt-8 ">Contactos</h4>
              <ul className="block py-4">
                <Servicios servicio="educacion" />
                <Servicios servicio="Acompañamiento abuelas" />
                <Servicios servicio="Trabajo social " />
                <Servicios servicio="Psicología " />
                <Servicios servicio="Artes" />
                <Servicios servicio="olla de la misericordia" />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="redes_footer flex justify-center gap-6 p-1">
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

      <div className="mt-4 flex justify-center info_footer">
        <InfoAdi infoAdi="Cra. 56#17-44 " />
        <InfoAdi infoAdi="Bogotá D.C" />
        <InfoAdi infoAdi="321 949 92 71  " />
        <InfoAdi infoAdi="domuscolombia@hotmail.com" />
      </div>
    </div>
  );
};
