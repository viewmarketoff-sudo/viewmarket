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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/40"
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
        <div className="absolute inset-0 opacity-30 blur-3xl">
          <div className="select-none bg-gradient-to-b from-primary to-primary/50 bg-clip-text text-[180px] font-bold text-transparent sm:text-[220px] md:text-[280px]">
            404
          </div>
        </div>

        {/* Main 404 text */}
        <motion.div
          className="relative select-none text-[180px] font-bold leading-none sm:text-[220px] md:text-[280px]"
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
          className="absolute left-0 right-0 top-full select-none text-[180px] font-bold leading-none opacity-10 sm:text-[220px] md:text-[280px]"
          style={{
            transform: "scaleY(-0.3) translateY(-30%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)",
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
    className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-transparent"
    initial={{ scaleX: 0, opacity: 0 }}
    animate={{ scaleX: 1, opacity: 1 }}
    transition={{ duration: 1, delay: 0.5 }}
  />
);

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <ParticlesBackground />

      <div className="relative z-20 flex flex-col items-center gap-8 px-6 text-center">
        {/* 404 Display */}
        <Floating404 />

        {/* Content */}
        <motion.div
          className="flex max-w-lg flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <AnimatedLine />

          <h1 className="bg-gradient-to-b from-foreground to-foreground-light bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl">
            Page not found
          </h1>

          <p className="text-base leading-relaxed text-foreground-light">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
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
              className="group flex items-center justify-center gap-3 rounded-full border border-border/70 bg-muted/30 px-8 py-4 text-sm font-semibold text-foreground-light transition-all duration-300 hover:-translate-y-1 hover:border-foreground-light hover:text-foreground"
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
