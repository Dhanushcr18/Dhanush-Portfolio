'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Scene3D from '../3d/Scene3D';
import { SkillSphere } from '../3d/SkillSphere';

const skills = [
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Python', color: '#3776AB' },
  { name: 'AI', color: '#FF6F61' },
  { name: 'ML', color: '#00C853' },
  { name: 'Git', color: '#F05032' },
  { name: 'UI/UX', color: '#A855F7' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />

      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">Interactive 3D view - Drag to explore</p>
        </motion.div>

        {/* 3D Skills Scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative w-full h-[600px] rounded-2xl overflow-hidden glass"
        >
          {isInView && (
            <Scene3D cameraPosition={[0, 0, 10]} enableControls>
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * Math.PI * 2;
              const radius = 4;
              const x = Math.cos(angle) * radius;
              const z = Math.sin(angle) * radius;
              const y = Math.sin(angle * 2) * 1;
              
              return (
                <SkillSphere
                  key={skill.name}
                  skill={skill.name}
                  position={[x, y, z]}
                  color={skill.color}
                />
              );
            })}
          </Scene3D>
          )}
        </motion.div>

        {/* Skills Grid - Alternative View */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass p-6 rounded-xl text-center cursor-pointer group
                         hover:glass-strong transition-all duration-300"
              style={{
                boxShadow: `0 0 20px ${skill.color}20`,
              }}
            >
              <motion.div
                className="text-3xl mb-2"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto"
                  style={{
                    backgroundColor: `${skill.color}40`,
                    boxShadow: `0 0 15px ${skill.color}60`,
                  }}
                />
              </motion.div>
              <h3 className="font-semibold" style={{ color: skill.color }}>
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
