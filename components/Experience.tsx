export default function Experience() {
  const experiences = [
    {
      period: "2026 - Present",
      title: "Developer",
      company: "Bengkel Koding",
      description: "Handled multiple projects including BNN system, Polyclinic system, and Alumni platform. Worked on frontend development, API integration, and system implementation.",
      photo: "/assets/photos/developer.jpeg",
    },
    {
      period: "2026 - Present",
      title: "Project Mentor",
      company: "Bengkel Koding",
      description: "Mentored selected students in developing real-world web projects. Provided technical guidance and code review.",
      photo: "/assets/photos/projectu24.jpeg",
    },
    {
      period: "2026",
      title: "Cashier Web App",
      company: "External Project",
      description: "Developed a cashier application for external use. Implemented core features and handled system functionality based on user needs.",
      photo: "/assets/photos/foto 1.png",
    },
    {
      period: "2025",
      title: "Admin Web Developer",
      company: "Bengkel Koding",
      description: "Built BengTix website and managed internal web systems. Also handled the organization's operations running at Bengkel Koding.",
      photo: "/assets/photos/asisten.jpeg",
    },
    {
      period: "2025",
      title: "Web Development Instructor",
      company: "Bengkel Koding",
      description: "Taught Laravel fundamentals and guided students in building web applications.",
      photo: "/assets/photos/asisten.jpeg",
    },
    {
      period: "2025",
      title: "Web Developer Certification Handler",
      company: "Career Guidance Course",
      description: "Managed and assisted certification process for web development students.",
      photo: "/assets/photos/bimkar.jpeg",
    },
    {
      period: "2024",
      title: "Web Developer Training",
      company: "BTNG",
      description: "",
      photo: "/assets/photos/foto 1.png",
    },
    {
      period: "2023",
      title: "Mobile Development Training",
      company: "BTNG",
      description: "",
      photo: "/assets/photos/foto 1.png",
    },
  ];

  return (
    <section id="experience" className="section relative min-h-screen">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12">Experience</h2>
        <div className="grid grid-2 gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="card experience-card p-6">
              <div className="flex gap-6">
                <img
                  src={exp.photo}
                  alt={exp.title}
                  className="w-40 h-28 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <span className="text-red font-medium text-sm">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-white mt-1">{exp.title}</h3>
                  <span className="text-gray-400 text-sm">{exp.company}</span>
                  {exp.description && (
                    <p className="text-gray-400 mt-2 text-sm">{exp.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}