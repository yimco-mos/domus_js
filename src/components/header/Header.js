import { ListHeader } from "./headercomponents/ListHeader";
import "styles/header/contentHeader.css";
import { SubHeader } from "./headercomponents/SubHeader";
export default function Header() {
  return (
    <header>
      <SubHeader />
      <div className="content-all-header ">
        <div className="logo-header justify-center">
          <div className="logo-domus-header"></div>
        </div>

        <div className="nav-header">
          <ListHeader liheader="¿quienes somos?" />
          <ListHeader liheader="colabora con nosotros" />
          <ListHeader liheader="voluntariado" />
          <ListHeader liheader="domus para todos" />
          <ListHeader liheader="contactanos" />
        </div>
      </div>
    </header>
  );
}