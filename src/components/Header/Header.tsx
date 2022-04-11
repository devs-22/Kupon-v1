import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '../Styles/Button.styles';
import './Header.css';
import { MenuToggle } from './menuToggle';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggled = () => {
    setOpen(!isOpen);
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="kupon-container">
        <div className="logo">
          <NavLink to="/" className="nav-logo">
            Kupon
          </NavLink>
        </div>
        <div className="header-buttons">
          <div className="header-button">
            <Button
              color="#000000"
              backgroundColor="#fff"
              hover="#fff"
              width="91px"
              border="1px solid"
              className="sign-in"
            >
              Sign In
            </Button>
          </div>
          <div>
            <Button
              color="#fff"
              backgroundColor="#000000"
              hover="#025CE4"
              width="156px"
              border="none"
              onClick={() => {
                navigate('/SignUp');
              }}
            >
              Create Account
            </Button>
          </div>
        </div>
        <div className="hamburger">
          <div className="hamburger-index">
            <MenuToggle isOpen={isOpen} toggle={toggled} />
          </div>
          {isOpen && (
            <div className="ham-style">
              <NavLink className={'header-linker'} to="/" onClick={toggled}>
                FAQs
              </NavLink>
              <NavLink className={'header-linker'} to="/" onClick={toggled}>
                Terms
              </NavLink>
              <NavLink className={'header-linker'} to="/" onClick={toggled}>
                Privacy
              </NavLink>
              <NavLink className={'header-linker'} to="/" onClick={toggled}>
                Contact Us
              </NavLink>
              <div className="header-button">
                <Button
                  color="#000000"
                  backgroundColor="#fff"
                  hover="#fff"
                  width="298px"
                  border="1px solid"
                  className="sign-in"
                >
                  Sign In
                </Button>
              </div>
              <div>
                <Button
                  color="#fff"
                  backgroundColor="#000000"
                  hover="#025CE4"
                  width="298px"
                  border="none"
                  onClick={() => {
                    navigate('/SignUp');
                  }}
                >
                  Create Account
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
