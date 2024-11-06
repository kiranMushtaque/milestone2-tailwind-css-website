"use client";
import React from "react";
import About from "./about/page";
import Contact from "./contact/page";
import Home from "./components/home";
const Page = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default Page;
