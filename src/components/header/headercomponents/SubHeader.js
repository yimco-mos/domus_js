'use client'
import React from "react";

export const SubHeader = () => {
  const descargarPDF = async () => {
    const pdfURL = '/src/pdf/rut/RUTDOMUS2020-actualizado-1.pdf'; 
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

  const InfoAdi = ({ infoAdi, img_link }) => {
    return (
      <div className="flex">
        <span className="py-1 mr-1"> <img src={img_link} alt="icono" /> </span>
        <p className="mr-4">{infoAdi}</p>
      </div>
    );
  };

  return (
    <div className="subheader justify-center gap-12 p-1 flex">
      <div className="contacto_subh">
        <div className="info_subh flex aling-center space-8 mr-2">
          <InfoAdi img_link="https://img.icons8.com/ios-filled/18/cell-phone.png" infoAdi="321-949-92-71" />
          <InfoAdi img_link="https://img.icons8.com/ios-glyphs/18/gmail.png" infoAdi="domuscolombia@hotmail.com" />
        </div>
      </div>

      <div className="contactanos_subh cursor-pointer bg-neutral-950" onClick={descargarPDF}>
        <span> Descargar PDF</span>
      </div>
    </div>
  );
};
