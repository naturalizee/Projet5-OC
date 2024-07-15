import React from 'react';
import { LayoutHeader, LayoutFooter } from '../Components/Layout';
import "../Styles/home.scss";

export function Home() {
  return (
    <div>
      <LayoutHeader />
      <section className="promise">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <LayoutFooter />
    </div>
  );
}
