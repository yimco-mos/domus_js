import React from 'react'

export const Eventos = ({t_reciente,img_reciente}) => {
  return (
    <div    className='tag_eventos'>

        <div className="eventos_content flex">


            <div className='evento_reciente block'>

                <div className='t_reciente'><h5>Eventos Recientes</h5></div>



                    <div className='tag_reciente flex'>

                        <div className='img_reciente'><img src={img_reciente} /></div>


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



            </div>

                <div className="evento_destacado"></div>


        </div>



    </div>
  )
}
