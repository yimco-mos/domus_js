import React from "react";

export const Redes = ({ link_red, link_img,no_charge }) => {
  return (
    <div className="redes">
      <a target="blank" href={link_red}>
        <img src={link_img} alt={no_charge} />
      </a>
    </div>
  );
};
