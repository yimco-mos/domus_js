import { servicios } from "@/textos/misionvision.text";

export const Servicios = () => {
  return (
    <div className="text-gray-400">
        {servicios.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
    </div>
  );
}