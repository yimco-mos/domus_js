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
          style={{ objectFit: 'cover', width: '100%', height: '100%',background:'cover' }} 
          
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

        <div className='txt_ubi'>
        <p><b>ubicacion :</b> {ubi_programa}</p>

        </div>
      </div>
    </div>
  );
};
