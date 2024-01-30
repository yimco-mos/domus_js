'use client'
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'styles/home/collage.css';

export const Collage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "efataportada.jpg",
    "show.jpg",
    "imawin.jpg",
    "santarosa.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="collage-images ">

<div className="t_carrusel ">

<h1 >Domus</h1>
<h3>Colombia</h3>

</div>

    

      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        autoFocus={true}
        infiniteLoop
        interval={5000}
        selectedItem={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={`/carrusel/${image}`} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
          




    </div>
  );
};
