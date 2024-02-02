'use client'
import { useState } from "react"
import Link from "next/link"

const cerrarMenu=(state)=>{

  sendStatusCode(e=>!e)

}



export const Menumovil =()=>{
  const [cerrar,setCerrar]=useState(false)



  return(





    <div className="menu_movil">
        


      <div className="cerrar_movil" onClick={cerrarMenu}>cerrar</div>


        <ul className='list_movil list-none sapce-y-4 p-4 text-xl'>
          <li> <Link href={'/'}>pagina principal </Link> </li>
          <li> <Link href={'/quienes_somos'}>quienes somos </Link> </li>
          <li><Link href={'/ayudemos'}>ayudanos a ayudar</Link></li>
          <li>eventos</li>
          <li><a href="#contactos">contactos</a></li>
        </ul>

      
      


    </div>
  )

  }