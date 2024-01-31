import React from 'react'
import '@/styles/home/eventos.css'
export const Eventos = ({t_reciente,img_reciente}) => {
  return (
    <div    className='tag_eventos'>

        <div className="eventos_content flex">


            <div className='evento_reciente block'>

                <div className='t_reciente'><h5>Eventos Recientes</h5></div>

            



            </div>

                <div className="evento_destacado"></div>


        </div>



    </div>
  )
}
