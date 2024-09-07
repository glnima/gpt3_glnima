import React from "react";

import {
  Blog,
  Features,
  Footer,
  Header,
  Posibility,
  WhatGPT3,
} from "./container";
// import container
import { CTA, Brand, Navbar } from "./components";
//import components
import "./App.css";
//import general css

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Posibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
