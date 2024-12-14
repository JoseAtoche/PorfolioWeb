import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"      
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 1000,
            },
          },         
          shape: {
            type: "star",
          },
          size: {
            value: 3,
            random: true,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0,
              startValue: "min",
            },
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0,
              startValue: "max",
              destroy: "min",
            },
          },
          move: {
            enable: true,
            speed: 0.01,
            direction: "none",        
          },
        },
        emitters: {
          direction: "none",
          rate: {
            delay: 0.1,
            quantity: 2,
          },
          size: {
            width: 100,
            height: 100,
          },
          position: {
            x: 50,
            y: 50,
          },
        },
        detectRetina: true,
       
      }}
    />
  );
}

export default Particle;
