import React, { useEffect } from 'react';
import SimpleParallax from "simple-parallax-js";

const ParallaxLogo = () => {
  useEffect(() => {
    new SimpleParallax(document.querySelector("img"), {
      scale: 1.5,
      orientation: "up",
      delay: .6,
      transition: "cubic-bezier(0,0,0,1)",
    });
  }, []);
  <SimpleParallax>
    <img src={"Logo.svg"} alt={"image"} />
  </SimpleParallax>
};

export default ParallaxLogo;