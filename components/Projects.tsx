'use client';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'BNN System',
    description: 'Sistem informasi Badan Narkotika Nasional untuk pendataan dan monitoring kegiatan.',
    role: 'Full Stack',
    image: '/assets/photos/developer.jpeg',
    tech: ['Next.js', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Polyclinic System',
    description: 'Sistem manajemen klinik untuk pendaftaran pasien dan data rekam medis.',
    role: 'Frontend Dev',
    image: '/assets/photos/developer.jpeg',
    tech: ['Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Alumni Platform',
    description: 'Platform alumni untuk networking dan lowongan kerja.',
    role: 'Full Stack',
    image: '/assets/photos/projectu24.jpeg',
    tech: ['Next.js', 'Laravel', 'MySQL'],
  },
  {
    title: 'BengTix',
    description: 'Website ticketing untuk acara dan kegiatan Bengkel Koding.',
    role: 'Full Stack',
    image: '/assets/photos/asisten.jpeg',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'Cashier App',
    description: 'Aplikasi kasir untuk UMKM dengan fitur laporan penjualan.',
    role: 'Full Stack',
    image: '/assets/photos/cashier.png',
    tech: ['Next.js', 'PostgreSQL'],
  },
  {
    title: 'Career Guidance Portal',
    description: 'Portal bimbingan karir untuk students dalam sertifikasi web development.',
    role: 'Frontend Dev',
    image: '/assets/photos/bimkar.jpeg',
    tech: ['React', 'Tailwind CSS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section relative min-h-screen">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-red to-orange-light"></div>
        </div>
        <div className="grid grid-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card !bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48 w-full bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.role === 'Full Stack'
                      ? 'bg-green-500 text-white'
                      : 'bg-blue-500 text-white'
                  }`}>
                    {project.role}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red to-orange-light text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                    <ArrowUpRight className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}