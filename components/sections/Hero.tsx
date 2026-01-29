'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Scene3D from '../3d/Scene3D';
import { FloatingCubes, ParticleField } from '../3d/FloatingCubes';
import Image from 'next/image';

export default function Hero() {
  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D cameraPosition={[0, 0, 8]}>
          <FloatingCubes />
          <ParticleField />
        </Scene3D>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark z-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-glow-blue rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-glow-purple rounded-full blur-3xl opacity-20 animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Profile Image with Banner */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Animated ring around image */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue via-primary to-secondary opacity-75 blur-md" />
            </motion.div>

            {/* Profile Picture */}
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://res.cloudinary.com/dv3wztxvf/image/upload/v1768070990/dhansuhcr_vqdvp7.jpg"
                alt="Dhanush C R"
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay gradient on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 glass-strong px-6 py-2 rounded-full border border-primary/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-gradient font-semibold text-sm">Available for Work</span>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.p
                className="text-primary text-lg md:text-xl mb-2 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                👋 Hello, I&apos;m
              </motion.p>
              
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <span className="text-gradient glow-text-blue">Dhanush C R</span>
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 h-20"
            >
              <TypeAnimation
                sequence={[
                  'Computer Science Student',
                  2000,
                  'AI Enthusiast',
                  2000,
                  'Web Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-gray-400 text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Passionate about creating innovative solutions through code.
              Transforming ideas into reality with cutting-edge technology.
            </motion.p>

            <motion.button
              onClick={handleScroll}
              className="glass-strong px-8 py-4 rounded-full text-lg font-semibold
                         relative overflow-hidden group cursor-pointer
                         transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ boxShadow: '0 0 30px rgba(14, 165, 233, 0.6)' }}
            >
              <span className="relative z-10 text-gradient">View My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-neon-blue via-primary to-secondary opacity-20"
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </motion.button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
