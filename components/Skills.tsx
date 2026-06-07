"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const skills = [
  { name: "Next.js", img: "/assets/skills/Nextjs.png" },
  { name: "React", img: "/assets/skills/react.png" },
  { name: "TypeScript", img: "/assets/skills/typescript.svg" },
  { name: "JavaScript", img: "/assets/skills/javascript.png" },
  { name: "Tailwind CSS", img: "/assets/skills/tailwindcss.png" },
  { name: "Radix UI", img: "/assets/skills/radix.webp" },
  { name: "Vite", img: "/assets/skills/vite.png" },
  { name: "Laravel", img: "/assets/skills/laravel.png" },
  { name: "Figma", img: "/assets/skills/figma.png" },
  { name: "MySQL", img: "/assets/skills/mysql.png" },
  { name: "PostgreSQL", img: "/assets/skills/postgresql.png" },
  { name: "Docker", img: "/assets/skills/Docker.png" },
  { name: "VS Code", img: "/assets/skills/vscode.png" },
  { name: "GitHub", img: "/assets/skills/GitHub-Logo.png" },
  { name: "Shadcn UI", img: "/assets/skills/shadcn.png" },
  { name: "DaisyUI", img: "/assets/skills/daisyui.png" },
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  return (
    <div className="flex-shrink-0 bg-white px-8 py-6 flex flex-col items-center gap-3 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer min-w-[160px] rounded-2xl">
      <Image
        src={skill.img}
        alt={skill.name}
        width={40}
        height={40}
        className="w-16 h-16 object-contain"
      />
      <span className="text-base font-semibold text-gray-900 whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef1.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef2.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = scrollContainer.scrollWidth / 2;
    const scrollSpeed = 1;

    const scroll = () => {
      scrollPosition -= scrollSpeed;
      if (scrollPosition <= 0) {
        scrollPosition = scrollContainer.scrollWidth / 2;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="skills" className="section relative min-h-screen">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-red to-orange-light"></div>
        </div>
        <div className="flex flex-col gap-10">
          <div
            ref={scrollRef1}
            className="flex gap-6 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={`row1-${index}`} skill={skill} index={index} />
            ))}
          </div>
          <div
            ref={scrollRef2}
            className="flex gap-6 overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <SkillCard key={`row2-${index}`} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
