import React from 'react'
import { txt_principal } from '@/textos/textos.txt'
import '@/styles/components/textoprincipal.css'

export const TextoPrincipal = () => {
  return (
    <div className='content_txt_prin'>
        <h4>{txt_principal.titulo}</h4>


    <div className='cont_prin_txt'>

            <p>{txt_principal.pa_uno}</p>
            <p> {txt_principal.pa_dos}</p>

    </div>

    </div>
  )
}
