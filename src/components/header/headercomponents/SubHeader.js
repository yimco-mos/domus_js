'use client'
import { Redes } from "@/components/footer/footercomponents/Redes";
import React from "react";


export const SubHeader = () => {
  const descargarPDF = async () => {
    const pdfURL = '@/pdf/rut/RutDomus.pdf'; 
    try {
      const response = await fetch(pdfURL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'archivo.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };


  return (
    <div className="subheader aling-center  flex">
      
        <div className="info_subh flex  space-8 mr-2">
     
        <Redes
          link_red="https://www.facebook.com/fundacion.domuscolombia?mibextid=ZbWKwL"
          link_img="https://img.icons8.com/fluency/40/facebook.png"
        />

        <Redes
          link_red="https://www.instagram.com/fundomus?utm_source=qr&igsh=MWhneWhhcGdydHV3Zg=="
          link_img="https://img.icons8.com/fluency/40/instagram-new.png"
        />

        <Redes
          link_red="https://wa.me/3219499271"
          link_img="https://img.icons8.com/color/40/whatsapp--v1.png"
        />
        
       </div>
   

      <div className="descarga_subh cursor-pointer bg-neutral-50" onClick={descargarPDF}>
        <span className="flex space-x-4 cursor-pointer capitalize"> <img src="https://img.icons8.com/material-rounded/24/download--v1.png" alt="download--v1"/> docs. legales</span>
      </div>
    </div>
  );
};
