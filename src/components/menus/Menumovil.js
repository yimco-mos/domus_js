import React from 'react'
import { ListHeader } from '../header/headercomponents/ListHeader'
export const Menumovil = () => {
  return (
    <div className='menu_movil'>

        <ul className='block bg-neutral-50'>


            <ListHeader liheader={"¿quienes somos?"}/>
            <ListHeader liheader={"ayudemos juntos"}/>
            <ListHeader liheader={"voluntariado"}/>
            <ListHeader liheader={"domus para todos"}/>
            <ListHeader liheader={"contactanos"}/>
        </ul>



    </div>
  )
}
