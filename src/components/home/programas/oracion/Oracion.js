import { oracion_pobres, titulo_oracion_pobres } from "@/textos/textos.txt";
import "@/styles/home/oracion.css";
export const Oracion = () => {
  return (
    <div className="oracion flex  ">
      <div className="img_vrg">
        <div className="virgen"></div>
      </div>

      <div className="oracion_txt">

        <span>
           <h3> {titulo_oracion_pobres}</h3>
        </span>
        <p>{oracion_pobres}</p>
            <br/>
            Amén.
        <span>

        
        </span>
      </div>
    </div>
  );
};
