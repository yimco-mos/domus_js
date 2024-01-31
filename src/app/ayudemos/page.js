import { Formulario } from "@/components/home/formulario/Formulario";
import { Oracion } from "@/components/home/oracion/Oracion";

export default function Page() {
  return (
    <div className="mt-10 colaboremos_control">
      <section className="oracion_sec ">
        <Oracion />
      </section>
      <section className="formulario_voluntariado mt-6">
        <Formulario />
      </section>
    </div>
  );
}
