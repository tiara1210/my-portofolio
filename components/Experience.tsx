"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    period: "Sept 2025 - Present",
    title: "Developer",
    company: "Bengkel Koding",
    description:
      "Handled multiple projects including BNN system, Polyclinic system, and Alumni platform.",
    photo: "/assets/photos/developer.jpeg",
  },
  {
    period: "Jan - Jul 2026",
    title: "Project Mentor",
    company: "Bengkel Koding",
    description:
      "Mentored selected students in developing real-world web projects.",
    photo: "/assets/photos/projectu24.jpeg",
  },
  {
    period: "May 2026",
    title: "Cashier Web App",
    company: "External Project",
    description:
      "Developed a cashier application for external use. Implemented core features.",
    photo: "/assets/photos/cashier.png",
  },
  {
    period: "Aug 2025 - Feb 2026",
    title: "Admin Web Developer",
    company: "Bengkel Koding",
    description: "Built BengTix website and managed internal web systems.",
    photo: "/assets/photos/asisten.jpeg",
  },
  {
    period: "Sept 2025 - Jan 2026",
    title: "Teaching Assistant",
    company: "Bengkel Koding",
    description:
      "Taught Laravel fundamentals and guided students in building web applications.",
    photo: "/assets/photos/asisten.jpeg",
  },
  {
    period: "Dec 2025",
    title: "Web Dev Certification",
    company: "Career Guidance Course",
    description:
      "Managed and assisted certification process for web development students.",
    photo: "/assets/photos/bimkar.jpeg",
  },
  {
    period: "Sept - Dec 2024",
    title: "Web Dev Training",
    company: "BTNG",
    description: "Completed intensive web development training program.",
    photo: "/assets/photos/dev.png",
  },
  {
    period: "Nov 2023",
    title: "Scratch Instructor",
    company: "Elementary School",
    description: "Taught Scratch programming to elementary school children.",
    photo: "/assets/photos/scratch.png",
  },
  {
    period: "Sept - Jan 2023",
    title: "Mobile Dev Training",
    company: "BTNG",
    description: "Learned mobile app development fundamentals using Flutter.",
    photo: "/assets/photos/mobile.png",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section relative overflow-hidden"
      style={{ backgroundColor: "#EFE9E3" }}
    >
      {/* Animated decorations */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [0, 3, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 rounded-2xl"
        style={{ backgroundColor: "#D9CFC7", opacity: 0.5 }}
      />
      <motion.div
        animate={{ y: [6, -6, 6], opacity: [0.3, 0.5, 0.3] }}
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
            Experience
          </h2>
          <div className="h-1 w-32 mx-auto mt-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-300"></div>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden">
                    <img
                      src={exp.photo}
                      alt={exp.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: "#D9CFC7", color: "#5D4E3C" }}
                  >
                    {exp.period}
                  </span>
                </div>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ color: "#1a1a1a" }}
                >
                  {exp.title}
                </h3>
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: "#6b6b6b" }}
                >
                  {exp.company}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#86868b" }}
                >
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
