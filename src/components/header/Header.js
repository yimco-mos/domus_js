"use client";
import { ListHeader } from "./headercomponents/ListHeader";
import "styles/header/contentHeader.css";
import "@/styles/header/menumovil.css";
import { Menumovil } from "../menus/Menumovil";

import { SubHeader } from "./headercomponents/SubHeader";
import Link from "next/link";

import { useState } from "react";

export default function Header() {
  const [movil, setMovil] = useState(false);


  const hideMovil=()=>{
    
   return setMovil((e) => !e);
  }

  return (
    <header className="justify-center">
<div className="subh"><SubHeader/> </div>
      <div className="content-all-header flex">


        <div className="logo-header justify-left">
          <Link href="/">
            <div className="logo-domus-header"></div>
          </Link>
        </div>

        <div className="movil_toggle">
          {movil ? (
            <img
              width="50"
              height="50"
              onClick={() => {
                setMovil((e) => !e);
              }}
              src="https://img.icons8.com/ios-filled/50/x.png"
              alt="x"
            />
          ) : (
            <img
              width="50"
              onClick={() => {
                setMovil((e) => !e);
              }}
              height="50"
              src="https://img.icons8.com/ios-filled/50/home.png"
              alt="home"
            />
          )}
        </div>

        {movil && <Menumovil nomovil={hideMovil} />}

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
          <a className="ml-4 hover:text-orange-600 capitalize"  href="#contactos">contactanos</a>
        </div>
      </div>
    </header>
  );
}
