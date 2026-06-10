"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero-bg section relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-0">
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: "linear-gradient(to bottom, transparent, #0f172a)",
        }}
      />
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
          <div 
            className={`text-center md:text-left order-1 md:order-1 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Hi, I'm Tiara Sofa</h1>
            <p className="text-2xl md:text-3xl mt-2 font-medium">Frontend Developer</p>
            <p className="mt-6 text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed text-lg">
              Frontend Developer who builds modern web apps with clean UI,
              scalable systems, and real world problem solving.
            </p>
            <div className="flex gap-4 mt-10 justify-center md:justify-start">
              <a href="#contact" className="btn-primary">Contact Me</a>
              <a href="#projects" className="btn-outline">View Projects</a>
            </div>
          </div>
          
          <div 
            className={`flex-shrink-0 order-2 md:order-2 w-full md:w-auto flex justify-center md:justify-end transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative group">
              {/* Pulsing background blur for a "living" effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red to-red-light blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              <div className="relative w-[300px] sm:w-[350px] md:w-[500px] h-[300px] sm:h-[350px] md:h-[500px] rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/assets/photos/foto 1.png"
                  alt="Tiara Sofa"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110"
                  style={{ 
                    transform: `translateY(${scrollY * 0.2}px)`,
                    transition: "transform 0.4s cubic-bezier(0.2, 0, 0.2, 1)"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
