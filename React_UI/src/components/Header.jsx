import React from "react";
// import "./Header.styles.scss";
import logo from "../images/logo_pineapple.png";
import pineapple from "../images/pineapple.png";

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/contacts" className="logo-image">
          <img src={logo} alt="logo" />
        </a>
        <a href="/contacts" className="logo-text">
          <img src={pineapple} alt="logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">How it works</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
}
