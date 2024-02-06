'use client'
import { useState } from "react"
import Link from "next/link"



export const Menumovil =({nomovil})=>{
  const [cerrar,setCerrar]=useState(false)

 
  return(





    <div className="menu_movil">
        




        <ul className='list_movil list-none sapce-y-4 p-4 text-xl'>
          <li onClick={nomovil} > <Link href={'/quienes_somos'} className="hover:text-orange-600 capitalize" >quienes somos </Link> </li>
          <li onClick={nomovil} className="hover:text-orange-600 " ><Link className="hover:text-orange-600 capitalize"  href={'/ayudemos'}>ayudanos a ayudar</Link></li>
          <li onClick={nomovil} className="hover:text-orange-600 " ><Link className="hover:text-orange-600 capitalize"  href={'/eventos'}>eventos</Link></li>
          <li onClick={nomovil} className="hover:text-orange-600 " ><a className="hover:text-orange-600 capitalize"  href="#contactos">contactos</a></li>
        </ul>

      
      


    </div>
  )

  }