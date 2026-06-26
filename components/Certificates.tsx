"use client";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    name: "Associate Data Scientist Vocational School Graduate Academy",
    issuer: "Digital Talent Scholarship 2025",
    date: "2025",
    file: "/assets/certif/VGSA.jpg",
  },
  {
    name: "Genetic Algorithm",
    issuer: "Bengkel Koding",
    date: "2025",
    file: "/assets/certif/genetic.png",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "2025",
    file: "/assets/certif/CCNA.jpg",
  },
  {
    name: "Associate Data Scientist Certification",
    issuer: "BNSP",
    date: "2025",
    file: "/assets/certif/data.png",
  },
  {
    name: "Web Developer Certification",
    issuer: "BNSP",
    date: "2025",
    file: "/assets/certif/web.png",
  },
  {
    name: "IBM Machine Learning",
    issuer: "Coursera",
    date: "2026",
    file: "/assets/certif/coursera2.jpg",
  },
  {
    name: "IBM and ISC2 Cybersecurity Specialist",
    issuer: "Coursera",
    date: "2026",
    file: "/assets/certif/coursera1.jpg",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(0);

  const nextCert = () => {
    setSelectedCert((prev) => (prev + 1) % certificates.length);
  };

  const prevCert = () => {
    setSelectedCert((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section
      id="certificates"
      className="section relative overflow-hidden"
      style={{ backgroundColor: "#EFE9E3" }}
    >
      {/* Animated decorations */}
      <motion.div
        animate={{ y: [-8, 8, -8], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 rounded-2xl"
        style={{ backgroundColor: "#D9CFC7", opacity: 0.5 }}
      />
      <motion.div
        animate={{ y: [8, -8, 8], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-24 right-16 w-16 h-16 rounded-full"
        style={{ backgroundColor: "#C9B59C" }}
      />
      <motion.div
        animate={{ x: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-8 w-10 h-10 rounded-lg"
        style={{ backgroundColor: "#8B7355", opacity: 0.4 }}
      />
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-6 w-12 h-12 rounded-xl"
        style={{ backgroundColor: "#D9CFC7", opacity: 0.6 }}
      />

      <div className="container max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold" style={{ color: "#1a1a1a" }}>
            Certificates
          </h2>
          <div className="h-1 w-32 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Certificate List - Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
              {certificates.map((cert, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCert(index)}
                  className={`w-full p-4 flex items-center gap-3 text-left transition-all duration-200 border-b last:border-b-0 ${
                    selectedCert === index
                      ? ""
                      : "hover:bg-gray-50"
                  }`}
                  style={{
                    borderColor: "rgba(0,0,0,0.08)",
                    backgroundColor: selectedCert === index ? "#D9CFC7" : "transparent",
                    borderLeft: selectedCert === index ? "4px solid #8B7355" : "4px solid transparent",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: selectedCert === index ? "#8B7355" : "#EFE9E3",
                    }}
                  >
                    <Award
                      className="w-5 h-5"
                      style={{ color: selectedCert === index ? "white" : "#8B7355" }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm truncate" style={{ color: "#1a1a1a" }}>
                      {cert.name}
                    </p>
                    <p className="text-xs" style={{ color: "#8B7355" }}>
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Certificate Preview */}
          <div className="flex-1">
            <motion.div
              key={selectedCert}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <div
                className="p-4 border-b flex items-center justify-between"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-3 min-w-0 flex-1">
                  <Award className="w-5 h-5 flex-shrink-0" style={{ color: "#8B7355" }} />
                  <div className="min-w-0">
                    <p className="font-semibold text-sm truncate" style={{ color: "#1a1a1a" }}>
                      {certificates[selectedCert].name}
                    </p>
                    <p className="text-xs" style={{ color: "#8B7355" }}>
                      Issued by {certificates[selectedCert].issuer} • {certificates[selectedCert].date}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6" style={{ backgroundColor: "#FAFAFA" }}>
                <div
                  className="relative w-full rounded-xl overflow-hidden shadow-sm"
                  style={{ backgroundColor: "#D9CFC7" }}
                >
                  <Image
                    src={certificates[selectedCert].file}
                    alt={certificates[selectedCert].name}
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="p-4 flex items-center justify-between border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevCert}
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm"
                  style={{ backgroundColor: "#EFE9E3", color: "#5D4E3C" }}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </motion.button>
                <span className="text-sm" style={{ color: "#8B7355" }}>
                  {selectedCert + 1} / {certificates.length}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextCert}
                  className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm text-white"
                  style={{ backgroundColor: "#5D4E3C" }}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
