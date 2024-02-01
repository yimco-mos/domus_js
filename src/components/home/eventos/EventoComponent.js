import React from 'react'

export const EventoComponent = ({img_reciente,t_reciente}) => {
  return (
    
    
    <div className='tag_reciente flex bg-neutral-50'>

    <div className='img_reciente'><img src={`/eventos/${img_reciente}`} /></div>


    <div className='content_reciente block'>


        <div className='t_reciente'><h3>{t_reciente}</h3></div>

            <div className='cont_reciente'>


                    <div className='inf_rec flex'>

                    <span> </span>


                    </div>
                    <div className='desc_rec'></div>
                    <div className='leer_rec'></div>



            </div>

    </div>

</div>

    
    )
}
