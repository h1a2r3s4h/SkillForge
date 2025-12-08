"use client";
import { useEffect, useRef } from "react";

export default function SnakeCursor() {
  const dots = useRef([]);
  const coords = useRef({ x: 0, y: 0 });
  const numDots = 20; // Number of trailing elements

  useEffect(() => {
    const createDots = () => {
      for (let i = 0; i < numDots; i++) {
        const dot = document.createElement("div");
        dot.classList.add("snake-dot");
        document.body.appendChild(dot);
        dots.current.push(dot);
      }
    };

    createDots();

    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    const animate = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      dots.current.forEach((dot, index) => {
        const nextDot = dots.current[index + 1] || dots.current[0];

        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;

        x += (nextDot?.offsetLeft - x) * 0.3;
        y += (nextDot?.offsetTop - y) * 0.3;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      dots.current.forEach((dot) => dot.remove());
      dots.current = [];
    };
  }, []);

  return null;
}
