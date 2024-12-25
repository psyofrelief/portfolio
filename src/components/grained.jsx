"use client";
import { useEffect } from "react";

export default function GrainEffect() {
  useEffect(() => {
    const applyGrainEffect = () => {
      if (window.grained) {
        const options = {
          animate: true,
          patternWidth: 100,
          patternHeight: 100,
          grainOpacity: 0.15,
          grainDensity: 1.5,
          grainWidth: 1,
          grainHeight: 1,
        };
        grained("#grain", options);
      }
    };

    // Wait for the script to load before running
    if (!window.grained) {
      const script = document.createElement("script");
      script.src = "/js/grained.min.js";
      script.onload = applyGrainEffect;
      document.body.appendChild(script);
    } else {
      applyGrainEffect();
    }
  }, []);

  return (
    <div id="grain" className="absolute inset-0 pointer-events-none z-0" />
  );
}
