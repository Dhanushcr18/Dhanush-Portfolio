'use client';

import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Footer from '@/components/sections/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;
    const throttleDelay = 50; // Throttle to 20fps for mouse movement

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      if (currentTime - lastTime < throttleDelay) return;
      
      lastTime = currentTime;
      cancelAnimationFrame(animationFrameId);
      
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue via-primary to-secondary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Parallax Background Effect */}
      <motion.div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-blue rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple rounded-full blur-3xl opacity-5" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>

      {/* Floating Navigation Dots */}
      <NavigationDots />
    </main>
  );
}

const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

function NavigationDots() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <motion.button
            key={section}
            onClick={() => {
              document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="relative group"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === section
                  ? 'border-primary bg-primary shadow-neon-blue'
                  : 'border-gray-500 bg-transparent'
              }`}
              animate={{
                scale: activeSection === section ? [1, 1.2, 1] : 1,
              }}
              transition={{
                duration: 2,
                repeat: activeSection === section ? Infinity : 0,
              }}
            />
            <span
              className="absolute right-6 top-1/2 transform -translate-y-1/2 
                         bg-dark-card px-3 py-1 rounded-lg text-sm whitespace-nowrap
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300
                         border border-primary/30 capitalize"
            >
              {section}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
