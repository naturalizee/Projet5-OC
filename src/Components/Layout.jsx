import React from 'react';
import logoHeader from '../Assets/Images/logo_header.png';
import logoFooter from '../Assets/Images/logo_footer.png';
import '../Styles/Layout.scss'
import { Link } from 'react-router-dom';

export function LayoutHeader() {
    return (
        <header>
           <a href="/"><img className="logo_header" src={logoHeader} alt="logo_header" /></a>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/About">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export function LayoutFooter() {
    return (
        <footer>
            <a href="/"><img className="logo_footer" src={logoFooter} alt="logo_footer" /></a>
            <aside>© 2020 Kasa. All rights reserved</aside>
        </footer>
    );
}
