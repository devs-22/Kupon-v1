import React from 'react';
import './Footer.css';
import { ReactComponent as Twitter } from '../../assets/SVGs/Twitter.svg';
import { ReactComponent as Instagram } from '../../assets/SVGs/instagram.svg';

const Footer = () => {
  const today = new Date();
  return (
    <div className='root-container'>
      <div className="footer-container">
        <div>
          <button>FAQs</button>
        </div>
        <div>
          <button>Terms</button>
        </div>
        <div>
          <button>Privacy</button>
        </div>
        <div>
          <button>Contact us</button>
        </div>
      </div>
      <hr />
      <p className="footer-year">@ {today.getFullYear()} Kupon Technology</p>
      <h1>Kupon</h1>
      <div className="socials">
        <Instagram className="ig" />
        <Twitter className="twitter" />
      </div>
    </div>
  );
};

export default Footer;
