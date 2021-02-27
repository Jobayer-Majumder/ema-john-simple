import React from "react";
import logo from "../../images/logo.png";
import "./header.css";

const header = () => {
  return (
    <div className="header-area">
      <div className="logo-area">
        <img src={logo} alt="" />
      </div>
      <nav className="nav-area">
        <a href="">Shop</a>
        <a href="">Order Review</a>
        <a href="">Manage Inventory Here</a>
      </nav>
    </div>
  );
};

export default header;
