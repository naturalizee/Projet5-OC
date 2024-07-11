import React from 'react';
import logoHeader from '../Assets/Images/logo_header.png';
import logoFooter from '../Assets/Images/logo_footer.png';
import './Layout.scss'

export function LayoutHeader() {
  return (
    <header>
      <img className="logo_header" src={logoHeader} alt="logo_header" />
      <nav>
        <ul>
          <li href="#">Accueil</li>
          <li href="#">A Propos</li>
        </ul>
      </nav>
    </header>
  );
}

export function LayoutFooter() {
  return (
    <footer>
      <img className="logo_footer" src={logoFooter} alt="logo_footer" />
      <aside>© 2020 Kasa. All rights reserved</aside>
    </footer>
  );
}
