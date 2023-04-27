import React from "react";
import "./footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
            et ligula ullamcorper malesuada proin libero nunc.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien
            et ligula ullamcorper malesuada proin libero nunc.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">StyleShop</span>
          <span className="copyright">
            Copyright© 2023. All rights reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payments.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
