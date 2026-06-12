"use client";
import { Award, FileText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const certificates = [
  {
    name: "Associate Data Scientist Vocational School Graduate Academy Digital Talent Scholarship 2025",
    issuer: "VGSA",
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
    name: "CCNA: Intorduction to Networks",
    issuer: "Cisco",
    date: "2025",
    file: "/assets/certif/CCNA.jpg",
  },
  {
    name: "Certification schema of associate Data Cientist",
    issuer: "BNSP",
    date: "2025",
    file: "/assets/certif/data.png",
  },
  {
    name: "Certification schema of web developer",
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

  return (
    <section id="certificates" className="section relative min-h-screen">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Certificates</h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-red to-orange-light"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          <div className="lg:w-80 flex-shrink-0">
            <div className="card bg-white/5 border border-white/10 overflow-hidden">
              {certificates.map((cert, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCert(index)}
                  className={`w-full p-4 flex items-center gap-4 text-left transition-all duration-200 border-b border-white/10 last:border-b-0 ${
                    selectedCert === index
                      ? "bg-white/10 border-l-4 border-l-red"
                      : "hover:bg-white/5 border-l-4 border-l-transparent"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red/20 to-orange-light/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white/80" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium truncate">
                      {cert.name}
                    </p>
                    <p className="text-white/50 text-sm">{cert.issuer}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="card bg-white/5 border border-white/10 flex flex-col">
              <div className="p-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-white/60" />
                  <span className="text-white font-medium">
                    {certificates[selectedCert].name}
                  </span>
                </div>
              </div>

              <div className="p-4 overflow-hidden">
                <div className="relative w-full rounded-lg bg-white/5">
                  <Image
                    src={certificates[selectedCert].file}
                    alt={certificates[selectedCert].name}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
