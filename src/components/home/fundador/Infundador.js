import React from "react";
import { fundador_text } from "@/textos/textos.txt";
export const Infundador = () => {
  return (
    <div className="fundador">
      <div className="image-fundador">
        <div className="image"></div>
      </div>

      <div className="infundador flex">
        <div className="txt_1">
          <p>
          {fundador_text.txt_one}
            </p>
        </div>

        <div className="txt_2">
          <p> 
            {fundador_text.txt_two}
                  </p>
        </div>

        <div className="txt_3">
          <p>
            {fundador_text.txt_three}
             </p>
        </div>
      </div>
    </div>
  );
};
