
import Hamburger from "./HamburgerMenu/Hamburger";
import { ReactElement } from "react";
import DesktopMenu from "./DesktopMenu/DesktopMenu";

const Header: React.FC = (): ReactElement => {

    return(
      <>
          <Hamburger />
          <DesktopMenu />
      </>
    ); 
  }
  export default Header;