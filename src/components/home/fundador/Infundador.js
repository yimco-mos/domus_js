'use client';
import React, { useState } from "react";
import { fundador_text } from "@/textos/textos.txt";



export const Infundador = () => {
  const [index, setIndex] = useState(0);
  const textos = [
    fundador_text.txt_one,
    fundador_text.txt_two,
    fundador_text.txt_three
  ];

  const handleNext = () => {
    if (index < textos.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(textos.length - 1);
    }
  };

  return (
    <div className="fundador flex md:w-400 ">
   
   
   
      <div className="image_fun">
        <div className="image_fundador"></div>
      </div>
      
      <div className="infundador block">
        <div className="txt_fundador">
          <p>{textos[index]}</p>
        </div>

        <div className=" space-x-4 m-4">
          {index !== 0 && <button className="bg-orange-600 btn_fun" onClick={handlePrev}>
          <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/less-than.png" alt="less-than"/>
            </button>}
          <button className="bg-orange-600 btn_fun" onClick={handleNext}><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/more-than.png" alt="more-than"/></button>
        </div>
      </div>

    </div>
  );
};
