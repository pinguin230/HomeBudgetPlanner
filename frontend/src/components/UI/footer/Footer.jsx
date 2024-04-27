import React from 'react';
import "./Footer.scss"

import facebook from "./../../../images/facebook logo.svg"
import instagram from "./../../../images/instagram logo.svg"
import messenger from "./../../../images/messenger logo.svg"
import twitter from "./../../../images/twitter logo.svg"
import whatsapp from "./../../../images/whatsapp logo.svg"

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__column">
        <div className="footer__logo">
          <h1 className="footer__logo logo">Фінанспланер</h1>
        </div>
      </div>
      <div className="footer__column">
        <div className="footer_pages--row">
          <div className="footer__pages">
            <p>About us</p>
            <p>Tags Samples</p>
            <p>Pricing</p>
            <p>Reviews</p>
            <p>FAQ</p>
            <p>Contacts</p>
          </div>
        </div>
        <div className="footer_pages--row">
          <div className="footer__info">
            <p>HELLO</p>
            <p>FAQ</p>
            <p>Contacts</p>
          </div>
        </div>
      </div>
			<div className="footer__column">
				<div className="footer__links">
          <img src={facebook} className="footer__icon" alt=""/>
          <img src={instagram} className="footer__icon" alt=""/>
          <img src={messenger} className="footer__icon" alt=""/>
          <img src={twitter} className="footer__icon" alt=""/>
          <img src={whatsapp} className="footer__icon" alt=""/>
				</div>
			</div>
    </div>
  );
}

export default Footer;
