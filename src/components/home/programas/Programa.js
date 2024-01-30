'use client'
import React, { useState, useEffect } from 'react';
import { programa } from '@/textos/programa.text.js.js';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ProgramaComponent } from './ProgramaComponent';

export const Programa = () => {
    const [programas, setProgramas] = useState([]);

    useEffect(() => {
        const programasArray = Object.values(programa).flatMap(item => item);
        setProgramas(programasArray);
    }, []);

    return (
        <div className='tag_programa_container justify-center'>
                <Carousel showArrows={true} infiniteLoop={false} showThumbs={false} showStatus={false} emulateTouch={true} swipeable={true} dynamicHeight={false} width="800px" showStatus={true} centerMode={true} centerSlidePercentage={33}>
                    {programas.map((prog, index) => (
                        <div key={index} className='targ_programas ' >
                            <ProgramaComponent
                                src_img_programa={prog.img_prog}
                                src_logo_programa={prog.logo_prog}
                                t_programa={prog.titulo}
                                descrip_programa={prog.descripcion}
                                ubi_programa={prog.ubicacion}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
    );
};
