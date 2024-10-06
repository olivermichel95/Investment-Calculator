import logo from "../assets/investment-calculator-logo.png";
import React from "react";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="Logo With Money Bag" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
