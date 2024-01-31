import { servicios } from "@/textos/misionvision.text";

export const Servicios = () => {
  return (
    <div>
        {servicios.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
    </div>
  );
}