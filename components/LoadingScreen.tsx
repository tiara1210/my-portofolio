"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Small delay to ensure initial render is complete
    const startTimer = setTimeout(() => {
      setHasStarted(true);

      // Smooth progress animation starting from 0 - FASTER
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => setIsComplete(true), 200);
            return 100;
          }
          // Faster increment
          const increment = prev < 40 ? 5 : prev < 70 ? 3 : prev < 90 ? 1.5 : 0.8;
          return Math.min(prev + increment, 100);
        });
      }, 20);

      return () => clearInterval(progressInterval);
    }, 150);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  // Particles for background
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 5 + 2,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 3,
  }));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -60,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ backgroundColor: "#EFE9E3" }}
        >
          {/* Animated subtle gradient background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(ellipse at 30% 40%, rgba(201, 181, 156, 0.4) 0%, transparent 60%)",
                  "radial-gradient(ellipse at 70% 60%, rgba(217, 207, 199, 0.5) 0%, transparent 60%)",
                  "radial-gradient(ellipse at 50% 80%, rgba(201, 181, 156, 0.3) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 30% 40%, rgba(201, 181, 156, 0.4) 0%, transparent 60%)",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            />
          </div>

          {/* Floating particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
                background: "rgba(139, 115, 85, 0.2)",
                boxShadow: "0 0 20px rgba(201, 181, 156, 0.4)",
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Brand text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="text-2xl font-bold tracking-widest mb-12"
              style={{ color: "#5D4E3C", letterSpacing: "0.2em" }}
            >
              TIARA SOFA
            </motion.p>

            {/* Progress container */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="w-48 mx-auto origin-center"
            >
              {/* Progress track */}
              <div
                className="h-1 rounded-full overflow-hidden"
                style={{ backgroundColor: "rgba(139, 115, 85, 0.15)" }}
              >
                {/* Progress fill */}
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #8B7355, #C9B59C, #8B7355)",
                    boxShadow: "0 0 15px rgba(139, 115, 85, 0.5)",
                    width: `${progress}%`,
                  }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.08, ease: "linear" }}
                />
              </div>

              {/* Progress percentage text */}
              <motion.p
                className="mt-4 text-sm font-medium"
                style={{ color: "rgba(139, 115, 85, 0.6)" }}
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-10 left-10">
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-12 h-12"
              style={{
                borderTop: "2px solid rgba(139, 115, 85, 0.4)",
                borderLeft: "2px solid rgba(139, 115, 85, 0.4)",
              }}
            />
          </div>
          <div className="absolute bottom-10 right-10">
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="w-12 h-12"
              style={{
                borderBottom: "2px solid rgba(139, 115, 85, 0.4)",
                borderRight: "2px solid rgba(139, 115, 85, 0.4)",
              }}
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-widest uppercase"
            style={{ color: "rgba(139, 115, 85, 0.5)", letterSpacing: "0.3em" }}
          >
            Full Stack Developer
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
