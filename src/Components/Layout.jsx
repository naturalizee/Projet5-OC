import React from "react";
import logoHeader from "../assets/logoHeader.png";
import logoFooter from "../assets/logoFooter.png";
import "../style/Layout.scss";
import { NavLink } from "react-router-dom";

//Header display
export function Header() {
  return (
    <header>
      <NavLink to="/">
        <img className="logoHeader" src={logoHeader} alt="logo"></img>
      </NavLink>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">A propos</NavLink>
      </nav>
    </header>
  );
}
//Footer display
export function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="logo" className="logo_footer"></img>
      <p>@ 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
