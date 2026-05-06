'use client';
import Image from 'next/image';
import { Code, FileCode, FileText, Palette, Layout, FormInput, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const skills = [
  { name: 'Next.js', icon: null, color: 'hover:bg-white/20', img: '/assets/skills/Nextjs.png' },
  { name: 'React', icon: null, color: 'hover:bg-cyan-500/20', img: '/assets/skills/react.png' },
  { name: 'TypeScript', icon: FileCode, color: 'hover:bg-blue-500/20', img: null },
  { name: 'JavaScript', icon: FileText, color: 'hover:bg-yellow-500/20', img: '/assets/skills/javascript.png' },
  { name: 'Tailwind CSS', icon: Palette, color: 'hover:bg-sky-500/20', img: '/assets/skills/tailwindcss.png' },
  { name: 'Radix UI', icon: Layout, color: 'hover:bg-violet-500/20', img: null },
  { name: 'React Hook Form', icon: FormInput, color: 'hover:bg-pink-500/20', img: null },
  { name: 'Vite', icon: Zap, color: 'hover:bg-purple-500/20', img: null },
];

export default function Skills() {
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

    document.querySelectorAll('.skill-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <section id="skills" className="section relative min-h-screen">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-red to-orange-light"></div>
        </div>
        <div className="grid grid-3 gap-6">
          {skills.map((skill, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleCards.includes(index);
            return (
              <div
                key={index}
                data-index={index}
                className={`skill-card card bg-white/5 p-8 flex flex-col items-center justify-center gap-4 border border-white/10 transition-all duration-500 cursor-pointer ${
                  isVisible
                    ? 'translate-x-0 opacity-100'
                    : isLeft
                    ? '-translate-x-16 opacity-0'
                    : 'translate-x-16 opacity-0'
                } ${skill.color}`}
              >
                {skill.img ? (
                  <Image src={skill.img} alt={skill.name} width={48} height={48} className="w-12 h-12 object-contain" />
                ) : (
                  skill.icon && <skill.icon className="w-12 h-12 text-white/80" />
                )}
                <span className="text-lg font-semibold text-white">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}