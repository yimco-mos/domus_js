import React from 'react';
import { datos } from '@/textos/misionvision.text';

export const Misionvision = () => {
    return (
      <div className='vision'>
        {/* Sección "Quiénes Somos" */}
        {datos.quienes_somos && (
          <div className='t_vision'>
            <h2>Quiénes Somos</h2>
            <div>
              <h3>Fundación DOMUS COLOMBIA</h3>
              <p>{datos.quienes_somos.fundacion_domus_colombia.descripcion}</p>
              <h4>Objetivo Primario</h4>
              <p>{datos.quienes_somos.fundacion_domus_colombia.objetivo_primario}</p>
              <h4>Objetivo Secundario</h4>
              <p>{datos.quienes_somos.fundacion_domus_colombia.objetivo_secundario}</p>
              <h4>Objetivo Social</h4>
              <p>{datos.quienes_somos.fundacion_domus_colombia.objetivo_social}</p>
            </div>
            <h3>Servicios</h3>
            <ul>
              {datos.quienes_somos.servicios.lista_servicios.map((servicio, index) => (
                <li key={index}>{servicio}</li>
              ))}
            </ul>
          </div>
        )}
  
        {datos.mision && (
          <div className='t_vision'>
            <h2>Misión</h2>
            <p>{datos.mision}</p>
          </div>
        )}
  
        {datos.vision && (
          <div className='t_vision'>
            <h2>Visión</h2>
            <p>{datos.vision.descripcion}</p>
            <h3>Objetivos</h3>
            <ul>
              {datos.vision.objetivos.map((objetivo, index) => (
                <li key={index}>{objetivo}</li>
              ))}
            </ul>
          </div>
        )}
  
        {/* Sección "Valores Inspiradores" */}
        {datos.valores_inspiradores && (
          <div className='t_vision'>
            <h2>Valores Inspiradores</h2>
            <ul>
              {datos.valores_inspiradores.map((valor, index) => (
                <li key={index}>{valor}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };