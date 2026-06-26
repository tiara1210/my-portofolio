"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

export default function About() {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/tiara1210",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/tiarasofa12",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/tiara_ssss",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="section relative overflow-hidden py-20 md:py-0"
      style={{ backgroundColor: "#EFE9E3" }}
    >
      {/* Animated decorations on edges */}
      <motion.div
        animate={{ y: [-5, 5, -5], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-4 w-14 h-14 rounded-xl"
        style={{ backgroundColor: "#D9CFC7" }}
      />
      <motion.div
        animate={{ y: [5, -5, 5], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 right-6 w-10 h-10 rounded-full"
        style={{ backgroundColor: "#C9B59C" }}
      />
      <motion.div
        animate={{ y: [-4, 4, -4], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 left-10 w-12 h-12 rounded-lg"
        style={{ backgroundColor: "#8B7355" }}
      />
      <motion.div
        animate={{ y: [4, -4, 4], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-36 right-8 w-8 h-8 rounded-full"
        style={{ backgroundColor: "#D9CFC7" }}
      />
      <motion.div
        animate={{ x: [-3, 3, -3], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-6 w-6 h-6 rounded-lg"
        style={{ backgroundColor: "#C9B59C" }}
      />

      <div className="container max-w-5xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold" style={{ color: '#1a1a1a' }}>
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 flex justify-center"
          >
            <div className="relative">
              {/* Kotak-kotak decorative - desktop only dengan animasi */}
              <motion.div
                animate={{ y: [-4, 4, -4], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block absolute -top-4 -left-4 w-20 h-20 rounded-xl z-0"
                style={{ backgroundColor: "#D9CFC7" }}
              />
              <motion.div
                animate={{ y: [4, -4, 4], rotate: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block absolute -top-3 -right-6 w-14 h-14 rounded-lg z-0"
                style={{ backgroundColor: "#C9B59C" }}
              />
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block absolute -bottom-6 -right-3 w-16 h-10 rounded-lg z-0"
                style={{ backgroundColor: "#8B7355", opacity: 0.7 }}
              />
              <motion.div
                animate={{ y: [3, -3, 3], rotate: [0, 3, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block absolute -bottom-5 -left-3 w-12 h-12 rounded-lg z-0"
                style={{ backgroundColor: "#D9CFC7", opacity: 0.9 }}
              />

              {/* Main photo */}
              <div
                className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden shadow-xl z-10"
                style={{ backgroundColor: "#D9CFC7" }}
              >
                <img
                  src="/assets/photos/formal.png"
                  alt="Tiara Sofa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:w-3/5"
          >
            <div className="space-y-4 mb-6">
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#6b6b6b" }}>
                I&apos;m <span className="font-semibold" style={{ color: "#5D4E3C" }}>Tiara Sofa</span>, a full stack developer who builds modern and scalable web applications using Laravel, Next.js, and RESTful API architecture.
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#6b6b6b" }}>
                I&apos;ve developed real-world systems including a cashier management platform, an alumni information system, the Integrated Assessment System (SAT) for the Central Java National Narcotics Agency, and various academic and organizational web projects.
              </p>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: "#6b6b6b" }}>
                Beyond development, I have experience as a web development teaching assistant and project mentor, helping students learn Laravel and build their own applications.
              </p>
            </div>

            {/* Education Card */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="p-5 rounded-xl shadow-md mb-6"
              style={{ backgroundColor: "white" }}
            >
              <h3 className="text-base font-semibold mb-3" style={{ color: "#1a1a1a" }}>
                Education
              </h3>
              <div className="space-y-1">
                <p className="font-medium" style={{ color: "#5D4E3C" }}>
                  Dian Nuswantoro University
                </p>
                <p className="text-sm" style={{ color: "#86868b" }}>
                  Informatics Engineering
                </p>
                <div className="flex items-center gap-2 flex-wrap mt-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: "#D9CFC7", color: "#5D4E3C" }}>
                    Semester 6
                  </span>
                  <span className="text-sm" style={{ color: "#86868b" }}>
                    GPA: 3.74 / 4.00
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Social Links & CV */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-xl shadow-md"
                      style={{ backgroundColor: "white" }}
                    >
                      <motion.span
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        style={{ color: "#5D4E3C" }}
                      >
                        {social.icon}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/assets/CV.pdf"
                download="CV_TIARASOFA"
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-white shadow-md"
                style={{ backgroundColor: "#5D4E3C" }}
              >
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  <Download className="w-4 h-4" />
                </motion.span>
                Download CV
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
