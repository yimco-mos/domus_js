import { Formulario } from "@/components/home/formulario/Formulario";
import { Oracion } from "@/components/home/oracion/Oracion";
import { Ayudantes } from "@/components/home/ayudantes/Ayudantes";
export default function AyudemosPage() {
  return (
    <div className="colabora_control justify-center ">  
        <div className="ayu_vol"> <Ayudantes/></div>

      <div className="oracion_sec ">
        <Oracion />
      </div>



      <div className="formulario_sec mt-6">
        <Formulario />
      </div>
    </div>
  );
}
