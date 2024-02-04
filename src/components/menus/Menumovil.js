'use client'
import { useState } from "react"
import Link from "next/link"



export const Menumovil =({nomovil})=>{
  const [cerrar,setCerrar]=useState(false)

  const LiMovil =({hidemovil,listmovil,refli})=>{

    return(

      <>
        <li onClick={hidemovil}><Link href={refli}>{listmovil} </Link></li>
      </>
    )

  }

  return(





    <div className="menu_movil">
        




        <ul className='list_movil list-none sapce-y-4 p-4 text-xl'>
         <LiMovil hidemovil={nomovil} refli={'/'} listmovil={'pagina principal'} />
          <li onClick={nomovil} > <Link href={'/quienes_somos'}>quienes somos </Link> </li>
          <li onClick={nomovil} ><Link href={'/ayudemos'}>ayudanos a ayudar</Link></li>
          <li onClick={nomovil} ><Link href={'/eventos'}></Link></li>
          <li onClick={nomovil} ><a href="#contactos">contactos</a></li>
        </ul>

      
      


    </div>
  )

  }