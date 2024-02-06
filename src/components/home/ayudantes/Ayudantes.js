"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { txt_ayudantes } from "@/textos/textos.txt";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/components/ayudantes.css";

export const Ayudantes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "ayudados.jpg",
    "fundacion.jpg",
    "ayudantes.jpg",
    "voluntario.jpg",
  ];
  const estilo = {
    filter: "grayscale(6%) blur(1px) brightness(85%) contrast(187%)",
    WebkitFilter: "grayscale(6%) blur(1px) brightness(85%) contrast(187%)",
    MozFilter: "grayscale(6%) blur(1px) brightness(85%) contrast(187%)",
    backgroundSize: "cover",
    backgroundPosition: "center",

    width: 450,
    height: 450,
  };

  return (
    <div className="content_vol">
   
      
      <div className="content_ayudantes">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          autoPlay
          autoFocus={true}
          infiniteLoop
          interval={3000}
          selectedItem={currentIndex}
          onChange={(index) => setCurrentIndex(index)}
        >
          {images.map((image, index) => (
            <div
              className="imgs_volun"
              key={index}
              style={{ ...estilo, backgroundImage: `url(/fundacion/${image})` }}
            ></div>
          ))}
        </Carousel>
      </div>  
      <div className="texto_ayudante ">
        <p>{txt_ayudantes}</p>
      </div> 

    </div>
  );
};
