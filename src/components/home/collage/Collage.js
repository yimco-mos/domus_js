"use client";
import { t_principal } from "@/textos/misionvision.text";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "styles/home/collage.css";

export const Collage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "efataportada.jpg",
    "show.jpg",
    "imawin.jpg",
    "santarosa.jpg",
  ];
  const estilo = {
    filter: "grayscale(6%) blur(1px) brightness(85%) contrast(187%)",
    WebkitFilter: "grayscale(6%) blur(1px) brightness(85%) contrast(187%)",
    MozFilter: "grayscale(6%) blur(1px) brightness(85%) contrast(187%)",
  };
  return (
    <div className="collage-images ">
      <div className="t_carrusel ">
        <h1>{t_principal}</h1>
      </div>

      <div className="carrusel_imgs">
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
            <div key={index}>
              <img
                style={estilo}
                src={`/carrusel/${image}`}
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
