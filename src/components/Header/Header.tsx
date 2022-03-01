import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../Styles/Button.styles';
import './Header.css';

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/" className="nav-logo">
            Kupon
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={handleClick}>
                FAQ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-links" onClick={handleClick}>
                Terms
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/blog" className="nav-links" onClick={handleClick}>
                Privacy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <div className="login-button">
                <Button
                  color="#000000"
                  backgroundColor="#fff"
                  hover="#fff"
                  width="298px"
                  border="1px solid"
                >
                  Log In
                </Button>
              </div>
            </li>
            <li>
              <div className="create-account">
                <Button
                  color="#fff"
                  backgroundColor="#000000"
                  hover="#025CE4"
                  width="298px"
                  border="none"
                >
                  Create Account
                </Button>
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <div className="button-header"></div>
        </div>
      </nav>
    </>
  );
}

export default Header;
