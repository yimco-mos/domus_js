// Header.js
import { ListHeader } from "./headercomponents/ListHeader";
import "styles/header/contentHeader.css";
import { SubHeader } from "./headercomponents/SubHeader";
import Link from "next/link";

export default function Header() {
  return (
    <header className="justify-center">
      <SubHeader />
      <div className="content-all-header">
        <div className="logo-header justify-left">
    <Link href="/">
    <div className="logo-domus-header"></div>
    </Link>
        </div>

        <div className="nav-header">
          <ListHeader route_link={"/"} liheader={<img  src="https://img.icons8.com/ios-filled/22/home.png" alt="home"/>} />
          <ListHeader route_link={"/quienes_somos"} liheader="¿Quiénes somos?" />
          <ListHeader route_link={"/ayudemos"} liheader="ayudanos a ayudar" />
          <ListHeader route_link={"/eventos"} liheader="Contáctanos" />
        </div>
      </div>
    </header>
  );
}
