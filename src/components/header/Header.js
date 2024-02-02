"use client";
import { ListHeader } from "./headercomponents/ListHeader";
import "styles/header/contentHeader.css";
import "@/styles/header/menumovil.css";
import { Menumovil } from "../menus/Menumovil";

import { SubHeader } from "./headercomponents/SubHeader";
import Link from "next/link";

import { useState } from "react";




export default function Header() {

  const [movil,setMovil]=useState(false)



  return (
    <header className="justify-center">
      <SubHeader />
      <div className="content-all-header flex">


        <div className="logo-header justify-left">
          <Link href="/">
            <div className="logo-domus-header"></div>
          </Link>
        </div>

          <div className="movil_toggle" >

          <img width="50" onClick={()=>{setMovil(e=>!e)}} height="50" src="https://img.icons8.com/ios-filled/50/home.png" alt="home"/>
          </div>



        {movil && <Menumovil />}

        <div className="nav-header">
          <ListHeader
            route_link={"/"}
            liheader={
              <img
                src="https://img.icons8.com/ios-filled/22/home.png"
                alt="home"
              />
            }
          />
          <ListHeader
            route_link={"/quienes_somos"}
            liheader="¿Quiénes somos?"
          />
          <ListHeader route_link={"/ayudemos"} liheader="ayudanos a ayudar" />
          <ListHeader route_link={"/eventos"} liheader="eventos" />
          <a href="#contactos">contactanos</a>
        </div>
        


      </div>

    </header>
  );
}
