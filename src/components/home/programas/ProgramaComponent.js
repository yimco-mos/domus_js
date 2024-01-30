// ProgramaComponent.jsx
import '@/styles/home/programa.css'
export const ProgramaComponent = ({
  src_img_programa, 
  src_logo_programa,
  t_programa,
  descrip_programa,
  ubi_programa,
}) => {
  return (
    <div className="tag_prog block text-neutral-700 p-3 bg-neutral-50 m-2" >
     
     
      <div className="img_programa">
        <img src={src_img_programa} alt="Imagen del programa" /> {/* Utiliza la ruta de la imagen */}
      </div>

      <div className="info_programa flex">
      <div className="logo_programa">
          <img src={src_logo_programa} alt="Logo del programa" /> {/* Utiliza la ruta del logo */}
        </div>
        <div className="t_programa">
          <h5>{t_programa}</h5>
        </div>

       
      </div>

      <div className="desc_programa block">
        <span>
          <p>{descrip_programa}</p>
        </span>
        <span>{ubi_programa}</span>
      </div>
    </div>
  );
};
