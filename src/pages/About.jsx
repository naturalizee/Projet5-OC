import React from "react";
import { Header, Footer } from "../Components/Layout";
import { AboutList } from "../Components/AboutList";
import("../style/About.scss");

// About page
export function About() {
  return (
    <>
      <Header />
      <div className="banner"></div>
      <AboutList />
      <Footer />
    </>
  );
}
