"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

// Floating particles background
const ParticlesBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const particles = useMemo(() => {
    if (!isMounted) {
      return [];
    }

    const width = window.innerWidth || 1000;
    const height = window.innerHeight || 800;

    return Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      initialX: Math.random() * width,
      initialY: Math.random() * height,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, [isMounted]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          initial={{
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0,
          }}
          animate={{
            y: [null, -20, 20],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
};

// 3D Floating 404 Text
const Floating404 = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="relative"
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        animate={{
          rotateX: mousePosition.y * 0.5,
          rotateY: mousePosition.x * 0.5,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow effect behind text */}
        <div className="absolute inset-0 blur-3xl opacity-30">
          <div className="text-[180px] sm:text-[220px] md:text-[280px] font-bold bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-transparent select-none">
            404
          </div>
        </div>

        {/* Main 404 text */}
        <motion.div
          className="relative text-[180px] sm:text-[220px] md:text-[280px] font-bold leading-none select-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-transparent">
            4
          </span>
          <motion.span
            className="inline-block bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            0
          </motion.span>
          <span className="bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-transparent">
            4
          </span>
        </motion.div>

        {/* Reflection effect */}
        <motion.div
          className="absolute top-full left-0 right-0 text-[180px] sm:text-[220px] md:text-[280px] font-bold leading-none select-none opacity-10"
          style={{
            transform: "scaleY(-0.3) translateY(-30%)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
          }}
        >
          <span className="bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-transparent">
            404
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Animated line decoration
const AnimatedLine = () => (
  <motion.div
    className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  />
);

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col items-center justify-center relative overflow-hidden">
      <ParticlesBackground />

      <div className="relative z-20 flex flex-col items-center gap-8 px-6 text-center">
        {/* 404 Display */}
        <Floating404 />

        {/* Content */}
        <motion.div
          className="flex flex-col items-center gap-6 max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatedLine />

          <h1 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-transparent">
            Page not found
          </h1>

          <p className="text-base text-foreground-light leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          {/* Action button */}
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={() => window.history.back()}
              className="group flex items-center justify-center gap-3 rounded-full border border-border/70 bg-muted/30 px-8 py-4 text-sm font-semibold text-foreground-light transition-all duration-300 hover:border-foreground-light hover:text-foreground hover:-translate-y-1"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
