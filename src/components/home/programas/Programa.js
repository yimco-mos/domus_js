'use client'

import React, { useState, useEffect } from 'react';
import { programa } from '@/app/textos/programa.text.js';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ProgramaComponent } from './ProgramaComponent';

export const Programa = () => {
  const [programas, setProgramas] = useState([]);

  useEffect(() => {
    const programasArray = Object.values(programa).flatMap((item) => item);
    setProgramas(programasArray);
  }, []);

  return (
    <div className="tag_programa_container">
      <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} dynamicHeight={false} emulateTouch={true} showStatus={false} showIndicators={false} centerMode={true} centerSlidePercentage={25}  >
        {programas.map((prog, index) => (
          <ProgramaComponent
            key={index}
            src_logo_programa={prog.logo_prog} 
            src_img_programa={prog.img_prog} 
            t_programa={prog.titulo}
            descrip_programa={prog.descripcion}
            ubi_programa={prog.ubicacion}
          />
        ))}
      </Carousel>
    </div>
  );
};