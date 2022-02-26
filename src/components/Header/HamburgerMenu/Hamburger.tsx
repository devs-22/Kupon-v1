import { useState, ReactElement } from "react";
import { NavHeader, NavBarToggle, Bone, Btwo, Bthree
        ,NavItems, NavLink, NavList, Change, Active, MobileMenu, Logo, MobileDisplay } from "./Hamburger.styles";
import { Button } from "../../Styles/Button.styles";

const Hamburger: React.FC = (): ReactElement => {
    const [toggle, setToggle] = useState(false)

  return(
    <>
        <MobileDisplay>
            <NavHeader>
                <Logo href="#"><h2>Kupon</h2></Logo>
                <NavBarToggle {...toggle ? Change : NavBarToggle} onClick = {()=> setToggle(!toggle)}>
                    <Bone>{toggle}</Bone>
                    <Btwo ></Btwo>
                    <Bthree></Bthree>
                </NavBarToggle>
            </NavHeader>

            {toggle  && <MobileMenu {...toggle ? MobileMenu : Active}>
                <NavItems>
                    <NavList> <NavLink href="/"> FAQs  </NavLink> </NavList>
                    <NavList> <NavLink href="/"> Terms </NavLink> </NavList>
                    <NavList> <NavLink href="/"> Privacy </NavLink> </NavList>
                    <NavList> <NavLink href="/"> Contact Us </NavLink> </NavList>
                    <NavList><Button
                                width="100%"
                                border="1px solid var(--black-color)"
                                background="var(--white-color)"
                            >
                                Log In
                            </Button>
                        </NavList>
                    <NavList><Button
                                width="100%"
                                background="var(--black-color)"
                                border="none"
                                color="var(--white-color)"
                            >Create Account
                            </Button>
                        </NavList>
                </NavItems>
            </MobileMenu>}
        </MobileDisplay>
    </>
  ); 
}
export default Hamburger;