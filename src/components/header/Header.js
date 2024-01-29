import { ListHeader } from "./headercomponents/ListHeader";
import "styles/header/contentHeader.css";
import { SubHeader } from "./headercomponents/SubHeader";
export default function Header() {
  return (
    <header>
      <SubHeader />
      <div className="content-all-header gap-15 ">
        <div className="logo-header justify-left text-yellow-400">
          <div className="logo-domus-header"></div>
        </div>

        <div className="nav-header justify-right">
          <ListHeader liheader="¿quienes somos?" />
          <ListHeader liheader="¿que hacemos?" />
          <ListHeader liheader="colabora con nosotros" />
          <ListHeader liheader="voluntariado" />
          <ListHeader liheader="noticias" />
          <ListHeader liheader="domus para todos" />
          <ListHeader liheader="contacta con nostros" />
        </div>
      </div>
    </header>
  );
}