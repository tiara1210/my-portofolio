"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-bg section relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0">
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #0f172a)",
        }}
      />
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
          <div className="text-center md:text-left order-1 md:order-1">
            <h1 className="text-4xl md:text-6xl">Hi, I'm Tiara Sofa</h1>
            <p className="text-2xl md:text-3xl mt-2">Frontend Developer</p>
            <p className="mt-4 text-gray-300 max-w-md">
              Frontend Developer who builds modern web apps with clean UI,
              scalable systems, and real-world problem solving.
            </p>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a href="#contact" className="btn-primary">Contact Me</a>
              <a href="#projects" className="btn-outline">View Projects</a>
            </div>
          </div>
          <div className="flex-shrink-0 order-2 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red to-red-light blur-sm opacity-50"></div>
              <div className="relative w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full overflow-hidden">
                <img
                  src="/assets/photos/foto 1.png"
                  alt="Tiara Sofa"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  style={{ transform: `translateY(${scrollY * 0.3}px)` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
