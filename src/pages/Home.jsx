import React from 'react';
import { LayoutHeader, LayoutFooter } from '../Components/Layout';

export function Home() {
  return (
    <div>
      <LayoutHeader />
      <h1>Page principale</h1>
      <LayoutFooter />
    </div>
  );
}
