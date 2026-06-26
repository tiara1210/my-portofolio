"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Floating decorative elements
  const floatingShapes = [
    { size: 120, x: "5%", y: "15%", delay: 0, duration: 6 },
    { size: 80, x: "85%", y: "20%", delay: 1, duration: 7 },
    { size: 60, x: "90%", y: "70%", delay: 0.5, duration: 5 },
    { size: 100, x: "8%", y: "75%", delay: 1.5, duration: 8 },
    { size: 40, x: "75%", y: "85%", delay: 2, duration: 6 },
  ];

  // Tech stack badges
  const techBadges = [
    { name: "React", x: "15%", y: "30%" },
    { name: "Next.js", x: "80%", y: "35%" },
    { name: "Laravel", x: "85%", y: "60%" },
    { name: "Node.js", x: "12%", y: "55%" },
  ];

  return (
    <section
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{ backgroundColor: "#EFE9E3" }}
    >
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left order-1"
          >
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm font-medium tracking-widest uppercase mb-4"
              style={{ color: "#8B7355" }}
            >
              Welcome to my portfolio
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
              style={{ color: "#1a1a1a" }}
            >
              Hi, I&apos;m
              <br />
              <span style={{ color: "#8B7355" }}>Tiara Sofa</span>
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl font-medium mt-4"
              style={{ color: "#6b6b6b" }}
            >
              Full Stack Developer
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-6 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed"
              style={{ color: "#86868b" }}
            >
              Building modern, scalable web applications from frontend interfaces to backend architecture.
              Creating digital experiences that make a difference.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4 mt-10 justify-center md:justify-start"
            >
              <a
                href="#contact"
                className="px-8 py-3 rounded-full font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ backgroundColor: "#5D4E3C" }}
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 rounded-full font-medium border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: "#C9B59C",
                  color: "#5D4E3C",
                  backgroundColor: "transparent",
                }}
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={mounted ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-2 md:order-2 w-full md:w-auto flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-[3rem]"
                style={{
                  background: "radial-gradient(circle, rgba(201, 181, 156, 0.5) 0%, transparent 70%)",
                  transform: "scale(1.1)",
                }}
              />

              {/* Main image container */}
              <div
                className="relative w-[280px] sm:w-[320px] md:w-[400px] h-[280px] sm:h-[320px] md:h-[400px] rounded-[2rem] overflow-hidden shadow-2xl"
                style={{ backgroundColor: "#D9CFC7" }}
              >
                <img
                  src="/assets/photos/foto 1.png"
                  alt="Tiara Sofa"
                  className="w-full h-full object-cover"
                />

                {/* Overlay gradient */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(to bottom, transparent 60%, rgba(239, 233, 227, 0.3))",
                  }}
                />
              </div>

              {/* Floating tech badges */}
              {techBadges.map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={mounted ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  className="absolute px-4 py-2 rounded-full shadow-lg"
                  style={{
                    left: badge.x,
                    top: badge.y,
                    backgroundColor: "white",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  }}
                >
                  <span className="text-xs font-medium" style={{ color: "#5D4E3C" }}>
                    {badge.name}
                  </span>
                </motion.div>
              ))}

              {/* Experience badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={mounted ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.3, duration: 0.5 }}
                className="absolute -right-4 -bottom-4 px-5 py-3 rounded-2xl shadow-xl"
                style={{ backgroundColor: "#5D4E3C" }}
              >
                <p className="text-white text-sm font-medium">Available for Work</p>
                <p className="text-white/70 text-xs">Open to opportunities</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-40"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            backgroundColor: index % 2 === 0 ? "#D9CFC7" : "#C9B59C",
          }}
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 10, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #EFE9E3)",
        }}
      />
    </section>
  );
}
