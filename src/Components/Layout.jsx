import React from "react";
import logoHeader from "../assets/logoHeader.png";
import logoFooter from "../assets/logoFooter.png";
import "../style/Layout.scss";
import { NavLink } from "react-router-dom";

//Affichage du Header
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
//Affichage du Footer
export function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="logo" className="logo_footer"></img>
      <p>@ 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
