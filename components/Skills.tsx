'use client';
import { Code, Atom, FileCode, FileText, Palette, Layout, FormInput, Zap } from 'lucide-react';

const skills = [
  { name: 'Next.js', icon: Code, color: 'hover:bg-white/20' },
  { name: 'React', icon: Atom, color: 'hover:bg-cyan-500/20' },
  { name: 'TypeScript', icon: FileCode, color: 'hover:bg-blue-500/20' },
  { name: 'JavaScript', icon: FileText, color: 'hover:bg-yellow-500/20' },
  { name: 'Tailwind CSS', icon: Palette, color: 'hover:bg-sky-500/20' },
  { name: 'Radix UI', icon: Layout, color: 'hover:bg-violet-500/20' },
  { name: 'React Hook Form', icon: FormInput, color: 'hover:bg-pink-500/20' },
  { name: 'Vite', icon: Zap, color: 'hover:bg-purple-500/20' },
];

export default function Skills() {
  return (
    <section id="skills" className="section relative min-h-screen">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-red to-orange-light"></div>
        </div>
        <div className="grid grid-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`card bg-white/5 p-8 flex flex-col items-center justify-center gap-4 border border-white/10 ${skill.color} transition-all duration-300 cursor-pointer`}
              >
                <Icon className="w-12 h-12 text-white/80" />
                <span className="text-lg font-semibold text-white">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}