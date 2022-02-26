import { Button } from "../../Styles/Button.styles";
import { DesktopDisplay, Logo, NavRight } from "./DesktopMenu.styles";
import { ReactElement } from "react";

const DesktopMenu: React.FC = (): ReactElement => {

  return(
    <>
        <DesktopDisplay>
            <Logo href="#"><h2>Kupon</h2></Logo>
            <NavRight>
                <Button
                    width="91px"
                    border="1px solid var(--black-color)"
                    marginRight="1rem"
                    background="var(--white-color)"
                    >
                    Sign In
                </Button>
                <Button
                        width="150px"
                        background="var(--black-color)"
                        border="none"
                        color="var(--white-color)"
                    >Create Account
                </Button>
            </NavRight>
        </DesktopDisplay>
    </>
  ); 
}
export default DesktopMenu;