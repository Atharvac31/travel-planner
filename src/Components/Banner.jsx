// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Banner = () => {
  return (
    <div>
      <div className="navDiv">
        <Navbar />
      </div>
      <div className="hero">
        <HeroSection />
      </div>
    </div>
  );
};

export default Banner;
