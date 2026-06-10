'use client';
import { useEffect, useState } from 'react';

export default function Experience() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.experience-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      period: "September 2025 - Present",
      title: "Developer",
      company: "Bengkel Koding",
      description: "Handled multiple projects including BNN system, Polyclinic system, and Alumni platform. Worked on frontend development, API integration, and system implementation.",
      photo: "/assets/photos/developer.jpeg",
    },
    {
      period: "January - Present",
      title: "Project Mentor",
      company: "Bengkel Koding",
      description: "Mentored selected students in developing real-world web projects. Provided technical guidance and code review.",
      photo: "/assets/photos/projectu24.jpeg",
    },
    {
      period: "Mey 2026",
      title: "Cashier Web App",
      company: "External Project",
      description: "Developed a cashier application for external use. Implemented core features and handled system functionality based on user needs.",
      photo: "/assets/photos/cashier.png",
    },
    {
      period: "August 2025 - February 2026",
      title: "Admin Web Developer",
      company: "Bengkel Koding",
      description: "Built BengTix website and managed internal web systems. Also handled the organization's operations running at Bengkel Koding.",
      photo: "/assets/photos/asisten.jpeg",
    },
    {
      period: "September 2025 - January 2026",
      title: "Web Development Teaching assistant",
      company: "Bengkel Koding",
      description: "Taught Laravel fundamentals and guided students in building web applications.",
      photo: "/assets/photos/asisten.jpeg",
    },
    {
      period: "December 2025",
      title: "Web Developer Certification Bimbingan Karir",
      company: "Career Guidance Course",
      description: "Managed and assisted certification process for web development students.",
      photo: "/assets/photos/bimkar.jpeg",
    },
    {
      period: "September - December 2024",
      title: "Web Developer Training",
      company: "BTNG",
      description: "Completed intensive web development training program. Learned HTML, CSS, JavaScript, and React basics. Built several hands-on projects including a personal portfolio website.",
      photo: "/assets/photos/dev.png",
    },
    {
      period: "November 2023",
      title: "Scratch Programming Instructor",
      company: "Elementary School",
      description: "Taught Scratch programming to elementary school children. Introduced basic programming concepts through interactive games and animations.",
      photo: "/assets/photos/scratch.png",
    },
    {
      period: "September - January 2023",
      title: "Mobile Development Training",
      company: "BTNG",
      description: "Learned mobile app development fundamentals using Flutter. Created cross-platform mobile applications and learned state management with Provider.",
      photo: "/assets/photos/mobile.png",
    },
  ];

  return (
    <section id="experience" className="section relative min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">Experience</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto items-stretch">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={index}
                data-index={index}
                className={`experience-card card p-8 transition-all duration-700 h-full flex flex-col justify-between ${
                  isVisible
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-12 opacity-0'
                }`}
              >
              <div className="flex gap-6 flex-col sm:flex-row items-start">
                <div className="shrink-0 w-full sm:w-32 h-32 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={exp.photo}
                    alt={exp.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-red font-semibold text-xs tracking-wider uppercase px-3 py-1 bg-red/10 rounded-full border border-red/20">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-400 font-medium text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red/60"></span>
                    {exp.company}
                  </div>
                  {exp.description && (
                    <p className="text-gray-400 mt-4 text-sm leading-relaxed">{exp.description}</p>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}