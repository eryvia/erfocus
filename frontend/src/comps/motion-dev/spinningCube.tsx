"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

export default function UseAnimationFrame() {
  // Type-safe reference to the cube div
  const ref = useRef<HTMLDivElement>(null);

  // Run on every animation frame (~60fps)
  useAnimationFrame((t: number) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;

    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className="container">
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>{`
      body {
        background: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .container {
        perspective: 800px;
        width: 200px;
        height: 200px;
      }

      .cube {
        width: 200px;
        height: 200px;
        position: relative;
        transform-style: preserve-3d;
      }

      .side {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        border: 2px solid rgba(255, 255, 255, 0.2);
      }

      .front  { transform: rotateY(0deg) translateZ(100px); background: red; }
      .back   { transform: rotateY(180deg) translateZ(100px); background: blue; }
      .left   { transform: rotateY(-90deg) translateZ(100px); background: green; }
      .right  { transform: rotateY(90deg) translateZ(100px); background: yellow; }
      .top    { transform: rotateX(90deg) translateZ(100px); background: cyan; }
      .bottom { transform: rotateX(-90deg) translateZ(100px); background: magenta; }
    `}</style>
  );
}
