import React from "react";
import "../css/Footer.css";
import { BiSupport } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { MdCall } from "react-icons/md";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="info">
        <div className="info-box">
          <BiSupport className="icon" />
          <p>24/7 Customer Support</p>
        </div>
        <div className="info-box">
          <CgMail className="icon" />
          <p>mail@financialfreedominvestment.co</p>
        </div>
        <div className="info-box">
          <BsChat className="icon" />
          <p>Friendly Support Ticket</p>
        </div>
        <div className="info-box">
          <MdCall className="icon" />
          <p>+1 (213) 342-4014</p>
        </div>
      </div>
      <div className="sub">
        <p>
          Copyright &copy; {year} financialfreedominvestment.co... All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
