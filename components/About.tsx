"use client";
import Link from "next/link";
import { Download } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-red to-orange-light"></div>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm Tiara, a full stack developer who builds modern and scalable web
            applications using Laravel, Next.js, and RESTful API architecture.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I've developed real-world systems including a cashier management
            platform, an alumni information system, the Integrated Assessment
            System (SAT) for the Central Java National Narcotics Agency, and
            various academic and organizational web projects. I enjoy turning
            ideas into complete digital solutions, from database design and
            backend development to responsive user interfaces.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Beyond development, I have experience as a web development teaching
            assistant and project mentor, helping students learn Laravel and
            build their own applications while fostering collaboration and
            problem-solving skills.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I'm passionate about building impactful products, solving real-world
            problems, and continuously growing as a software engineer.
          </p>
          <div className="mt-8 p-6 bg-transparent rounded-xl border border-white">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-2 text-gray-300">
              <p className="font-medium">Dian Nuswantoro University</p>
              <p>informatics engineering</p>
              <p>GPA: 3.74 / 4.00</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="/assets/CV.pdf"
              download="CV_TIARASOFA"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red to-orange-light text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute left-2 md:left-8 top-1/4 animate-float-slow">
        <Link
          href="https://github.com/tiara1210"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 md:p-4 bg-white/10 rounded-full border border-white/20 hover:bg-white/30 hover:border-white/40 hover:scale-110 transition-all duration-300 group"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-gray-900 transition-colors duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.3993.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
      </div>

      <div className="absolute right-2 md:right-8 top-1/3 animate-float">
        <Link
          href="https://linkedin.com/in/tiarasofa12"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 md:p-4 bg-white/10 rounded-full border border-white/20 hover:bg-blue-500/30 hover:border-blue-400/40 hover:scale-110 transition-all duration-300 group"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-blue-400 transition-colors duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
      </div>

      <div className="absolute left-4 md:left-12 bottom-1/4 animate-float-slower">
        <Link
          href="https://instagram.com/tiara_ssss"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-3 md:p-4 bg-white/10 rounded-full border border-white/20 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:scale-110 transition-all duration-300 group"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:brightness-110 transition-all duration-300"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </Link>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-5deg);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
