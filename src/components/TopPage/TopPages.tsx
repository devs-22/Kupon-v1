import { Button } from '../Styles/Button.styles';
import { ReactComponent as Line } from '../../assets/SVGs/Line 6.svg';
import {useNavigate } from 'react-router-dom';

import './TopPage.css';

const TopPages = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex-container">
        <div className="container">
          <div className="header-container">
            Create detailed invoice in a
            <span style={{ color: '#025CE4' }}> jiffy</span>.
          </div>
          <p className="header-paragraph">
            Send invoices to your customers globally, Get to provide details of
            your goods in seconds.
          </p>
          <Button
            backgroundColor="#000000"
            color="#FFFFFF"
            hover="#025CE4"
            width="156px"
            border="none"
            className="account-button"
            onClick={() => {
              navigate('/SignUp');
            }}
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
        </div>
        <div>
          <img
            src={require('../../assets/IMAGES/Saly-1 (1).png')}
            alt=""
            className="sally"
          />
          <img
            src={require('../../assets/IMAGES/puddle.png')}
            alt=""
            className="puddle"
          />
        </div>
      </div>
      <section>
        <h1 className="section-h1">GET STARTED</h1>
        <div className="get-started-header">
          <img
            src={require('../../assets/IMAGES/Polypodium.png')}
            alt=""
            className="poly"
          />
          <h2>Nigeria's First Invoicing App.</h2>
          <img
            src={require('../../assets/IMAGES/Polypodium.png')}
            alt=""
            className="poly2"
          />
        </div>
        <div className="started-flex-desktop">
          <div className="desktop-header">
            <div className="photo-header">
              <img src={require('../../assets/IMAGES/Frame 1562.png')} alt="" />
            </div>
            <img src={require('../../assets/IMAGES/Line 8.png')} alt="" />
            <div className="photo-header">
              <img src={require('../../assets/IMAGES/Frame 1563.png')} alt="" />
            </div>
            <img src={require('../../assets/IMAGES/Line 8.png')} alt="" />
            <div className="photo-header">
              <img src={require('../../assets/IMAGES/Frame 1564.png')} alt="" />
            </div>
            <img src={require('../../assets/IMAGES/Line 8.png')} alt="" />
            <div className="photo-header">
              <img src={require('../../assets/IMAGES/Frame 1565.png')} alt="" />
            </div>
          </div>
          <div className="desktop-footer">
            <div className="footer-p">
              <h1>Create account</h1>
              <p>
                Create an account on the web app <br /> then sign in
              </p>
            </div>
            <div className="footer-p">
              <h1>Create Invoice</h1>
              <p>Draft up an Invoice for your customer in just few minutes.</p>
            </div>
            <div className="footer-p">
              <h1>Send Invoice</h1>
              <p>
                Immediately send invoice to your customer after drafting through
                the mail.
              </p>
            </div>
            <div className="footer-p">
              <h1>Done in a jiffy</h1>
              <p>Continue with your business, now that invoice is sent.</p>
            </div>
          </div>
        </div>
        <div className="started-flex-mobile">
          <div className="create-account2">
            <img src={require('../../assets/IMAGES/Frame 1562.png')} alt="" />
            <h1>Create account</h1>
            <p className="p-account">
              Create an account on the web app <br /> then sign in
            </p>
          </div>
          <Line className="line" />
          <div className="create-invoice">
            <img src={require('../../assets/IMAGES/Frame 1563.png')} alt="" />
            <h1>Create Invoice</h1>
            <p className="p-create">
              Draft up an Invoice for your customer in just few minutes.
            </p>
          </div>
          <Line className="line" />
          <div className="create-invoice">
            <img src={require('../../assets/IMAGES/Frame 1564.png')} alt="" />
            <h1>Send Invoice</h1>
            <p className="p-invoice">
              Immediately send invoice to your customer after drafting through
              the mail.
            </p>
          </div>
          <Line className="line" />
          <div className="create-invoice">
            <img src={require('../../assets/IMAGES/Frame 1565.png')} alt="" />
            <h1>Done in a jiffy</h1>
            <p className="p-jiffy">
              Continue with your business, now that invoice is sent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TopPages;
