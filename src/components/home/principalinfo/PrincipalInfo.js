import React from 'react'
import '@/styles/components/principalinfo.css'
import Link from 'next/link'
export const PrincipalInfo = ({link_img,txt_targ,p_targ ,link_dire}) => {
  return (
    
      <Link href={link_dire}>



<div className='content_principal cursor-pointer'>
    

    <div className='img_cont_prin block'>
    <img src={link_img} alt="volunteering"/>
    </div>

    <div className='principal_txt text-center'>
            <h4>{txt_targ}</h4>

    </div>


    <div className="decrip_prin text-center">
        <p>{p_targ}</p>
    </div>

    </div>
      </Link>
  ) 
}
