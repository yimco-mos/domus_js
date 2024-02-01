import { servicios } from "@/textos/misionvision.text";
export const Servicios = () => {
  return (
    <div className="list-none text-gray-200">
        {servicios.map((servicio, index) => (
          <li key={index}>{servicio}</li>
        ))}
    </div>
  );
}