import React from 'react';
import { Button } from '../Styles/Button.styles';
import { ReactComponent as Sally } from '../../assets/SVGs/Saly-1.svg';
import './TopPage.css';

const TopPages = () => {
  return (
    <div>
      <div className="container">
        <div className="header-container">
          Create
          <br /> detailed
          <br /> invoice in a <span style={{ color: '#025CE4' }}>jiffy</span>.
        </div>
        <p className="header-paragraph">
          Send invoices to your customers
          <br /> globally, Get to provide details of your goods in seconds.
        </p>
      </div>
      <Button
        backgroundColor="#000000"
        color="#FFFFFF"
        hover="#025CE4"
        width="156px"
        border="none"
        className="account-button"
      >
        Create Account
      </Button>
      <Button
        backgroundColor="#FFFFFF"
        color="#000000"
        hover="#FFFFFF"
        width="126px"
        border="1px #00000"
        className="account-button"
      >
        Learn More
      </Button>
      <div>
        <Sally />
      </div>
    </div>
  );
};

export default TopPages;
