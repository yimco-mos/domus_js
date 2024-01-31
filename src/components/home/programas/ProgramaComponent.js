// ProgramaComponent.jsx
import '@/styles/home/programa.css'
export const ProgramaComponent = ({
  src_img_programa, 
  src_logo_programa,
  t_programa,
  descrip_programa,
  ubi_programa,
}) => {


  const estilo = {
    filter: 'grayscale(13%) sepia(7%) blur(1px) contrast(187%)',
    WebkitFilter: 'grayscale(13%) sepia(7%) blur(1px) contrast(187%)',
    MozFilter: 'grayscale(13%) sepia(7%) blur(1px) contrast(187%)',objectFit: 'cover', width: '100%', height: '100%',background:'cover' 
  };
  return (
    <div className='tag_prog'>

      <div className="img_programa">
      <img 
          src={src_img_programa} 
          alt="Imagen del programa" 
          style={{ objectFit: 'cover', width: '100%', height: '100%' }} 
        />
      </div>

      <div className="info_programa flex">
        <div className="logo_programa">
          <img src={src_logo_programa} 
          style={estilo} 
          
          alt="Logo del programa" />
        </div>
        <div className="t_programa">
          <h5>{t_programa}</h5>
        </div>
      </div>




      <div className="desc_programa  block">
        <div  className='txt_prog'>
          <p>{descrip_programa}</p>
        </div>

        <div className='txt_ubi  '>
        <p className='text-neutral-950'><b >ubicacion :</b> {ubi_programa}</p>

        </div>
      </div>
    </div>
  );
};
