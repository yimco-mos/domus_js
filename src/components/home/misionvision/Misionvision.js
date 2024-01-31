import React from "react";
import {
  quienesSomos,
  mision,
  vision,
} from "@/textos/misionvision.text";

export const Misionvision = () => {
  const objetivoKeys = Object.keys(quienesSomos);
  const misionKeys = Object.keys(mision);
  const visionKeys = Object.keys(vision);

  const estilo = {
    filter: 'grayscale(13%) sepia(7%) blur(1px) contrast(187%)',
    WebkitFilter: 'grayscale(13%) sepia(7%) blur(1px) contrast(187%)',
    MozFilter: 'grayscale(13%) sepia(7%) blur(1px) contrast(187%)'
  };

  return (
    <div className="content_misionv justify-center">
    

      <div className="img_bjs flex">

     
       
       
       
        <div className="obj_mision_content">
          {objetivoKeys.map((key) => (
            <div className="obj_list ;" key={key}>
              <div className="t_objetivos text-3xl py-2">
                <h4 className="t_obj">{key}</h4>
              </div>
            
              <div className="objetivos ">
                <p className="text-neutral-950 p-2 m4">{quienesSomos[key]}</p>
              </div>
            </div>
          ))}
        </div> 
        
         <div className="imgs_objs block">
              <img style={estilo} src="/fundacion/def.jpg"/>
              <img style={estilo} src="/fundacion/nina.jpg"/>


      <div className="mision_dec">
        <div className="mision_t py-2">
          <h4>{misionKeys}</h4>
        </div>
        <div className="mision_txt">
          <p className="text-neutral-950">{mision.mision}</p>
        </div>
      </div>




      <div className="vision_dec">
        <div className="vision_t py-2">
          <h4>{visionKeys}</h4>
        </div>
        <div className="vision_txt">
          <p className="text-neutral-950">{vision.vision}</p>
        </div>
      </div>

              </div>



      </div>

            


     



    </div>
  );
};
