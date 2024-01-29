import React from "react";

export const Servicios = ({ servicio, span_f, img_l_f }) => {
  return (
    <>
      <div className="flex ">
        <span>
          <img src={img_l_f} />
        </span>
        <li className="text-xs mt-2 mr-8 ">{servicio}</li>
      </div>
      <span>{span_f}</span>
    </>
  );
};
