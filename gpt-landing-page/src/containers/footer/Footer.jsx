import React from "react";
import gpt3Logo from "../../assets/logo.svg";
import "./footer.css";

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">
        Do you want to step in to the future before others
      </h1>
    </div>

    <div className="footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>
          Bangalore,Karnataka,India <br /> All Rights Reserved
        </p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p><a href="asheerhameed54321@gmail.com">asheerhameed54321@gmail.com</a></p>
        <p>+91-7259028706</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>
        Designed by <b>AR Shakir</b> Developed by <b>Asheer Hameed</b>
      </p>
    </div>
  </div>
);

export default Footer;
