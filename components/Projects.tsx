'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Greenben - Minyak Jelantah Collection',
    slug: 'greenben',
    description: 'Landing page design for used cooking oil collection platform that can be transformed into various creative and useful products.',
    role: 'Designer',
    image: '/assets/project/greenben.png',
    tech: ['Figma', 'UI/UX Design', 'Sustainability'],
  },
  {
    title: 'Akuaponik - Smart Aquaponics System',
    slug: 'akuaponik',
    description: 'Landing page design for smart aquaponics monitoring system with fish and plant health tracking.',
    role: 'Designer',
    image: '/assets/project/akuaponik.png',
    tech: ['Figma', 'UI/UX Design', 'Agritech'],
  },
  {
    title: 'Sistem Asesmen Terpadu BNN Jawa Tengah',
    slug: 'bnn-system',
    description: 'Integrated assessment system for drug users assessment process with multiple user roles.',
    role: 'Frontend developer',
    image: '/assets/project/bnn.png',
    tech: ['Next.js', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Poliklinik',
    slug: 'polyclinic-system',
    description: 'Polyclinic management system for healthcare operations including registration and medical records.',
    role: 'Full Stack',
    image: '/assets/project/poliklinik.png',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'Alumni Platform',
    slug: 'alumni-platform',
    description: 'Career & networking platform connecting alumni, students, and industry partners.',
    role: 'Full Stack',
    image: '/assets/project/alumni.png',
    tech: ['Next.js', 'Laravel', 'MySQL'],
  },
  {
    title: 'BengTix',
    slug: 'bengtix',
    description: 'Event ticketing platform for discovering events, purchasing tickets, and managing bookings.',
    role: 'Full Stack',
    image: '/assets/project/bengtix.png',
    tech: ['Laravel', 'MySQL', 'Tailwind CSS'],
  },
  {
    title: 'Cashier App',
    slug: 'cashier-app',
    description: 'Point of sale system for retail operations including sales transactions and inventory management.',
    role: 'Full Stack',
    image: '/assets/project/chasier.jpg',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
  },
  {
    title: 'Shop - Online Marketplace',
    slug: 'shop',
    description: 'E-commerce website for buying and selling goods online with discount management features.',
    role: 'Full Stack',
    image: '/assets/project/shop.png',
    tech: ['CodeIgniter 4', 'MySQL', 'Bootstrap'],
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
            <Link
              href={`/projects/${project.slug}`}
              key={index}
              className="!bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
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
                  <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red to-orange-light text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity">
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}