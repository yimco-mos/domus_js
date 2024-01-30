import React from "react";

const SubHeader = () => {
  const pdfURL = '/ruta/a/tu/archivo.pdf'; // Ajusta la ruta a tu archivo PDF

  const descargarpdf = async () => {
    try {
      const response = await fetch(pdfURL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'archivo.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  const InfoAdi = ({ infoAdi, img_link }) => {
    return (
      <div className="flex ">
        <span className="py-1 mr-1"> <img src={img_link} /> </span>
        <p className="mr-4">{infoAdi}</p>
      </div>
    );
  };

  return (
    <div className="subheader justify-center gap-12 p-1 flex">

      <div className="contacto_subh ">
        <div className="info_subh flex aling-center space-8 mr-2">
          <InfoAdi img_link="https://img.icons8.com/ios-filled/18/cell-phone.png" infoAdi="321-949-92-71  " />
          <InfoAdi img_link="https://img.icons8.com/ios-glyphs/18/gmail.png" infoAdi="domuscolombia@hotmail.com" />
        </div>
      </div>

      <div className=" contactanos_subh cursor-pointer bg-neutral-950">
        <a onClick={descargarpdf}>descargar</a>
      </div>

    </div>
  );
};

export default SubHeader;
