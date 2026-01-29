'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Desoster Management',
    description: 'Disaster management system to coordinate emergency responses and resource allocation during critical situations.',
    tags: ['TypeScript', 'React', 'Node.js'],
    gradient: 'from-red-500 to-orange-500',
    icon: '🚨',
    github: 'https://github.com/Dhanushcr18/Desoster-management',
  },
  {
    title: 'Habit Tracker',
    description: 'Track and build better habits with this intuitive habit tracking application.',
    tags: ['JavaScript', 'React', 'Web App'],
    gradient: 'from-green-500 to-teal-500',
    icon: '✅',
    github: 'https://github.com/Dhanushcr18/habit-tracker',
  },
  {
    title: 'Edu Wealth',
    description: 'Educational platform for financial literacy and wealth management learning.',
    tags: ['TypeScript', 'Next.js', 'Education'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '📚',
    github: 'https://github.com/Dhanushcr18/Edu-wealth',
  },
  {
    title: 'BMTC Bus System',
    description: 'Bus tracking and management system for public transportation.',
    tags: ['Web App', 'Real-time'],
    gradient: 'from-yellow-500 to-orange-500',
    icon: '🚌',
    github: 'https://github.com/Dhanushcr18/BMTC',
  },
  {
    title: 'Restaurant Website',
    description: 'Modern restaurant website with menu display and online ordering features.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'from-purple-500 to-pink-500',
    icon: '🍽️',
    github: 'https://github.com/Dhanushcr18/Restorant-dhanushcr-new',
    demo: 'https://restodhanush.ccbp.tech',
  },
  {
    title: 'Text-based RPG Game',
    description: 'Interactive text-based RPG game that challenges your IQ and decision-making skills.',
    tags: ['Python', 'Game', 'CLI'],
    gradient: 'from-indigo-500 to-purple-500',
    icon: '🎮',
    github: 'https://github.com/Dhanushcr18/Text-based-RPG-game',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-glow-blue rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-glow-purple rounded-full blur-3xl opacity-10" />

      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">Hover to explore my work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isInView }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
      className="relative group cursor-pointer"
    >
      {/* Card Glow Effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.gradient} opacity-0 blur-xl`}
        animate={{
          opacity: isHovered ? 0.3 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Card Content */}
      <div className="relative glass-strong rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-300">
        {/* Icon */}
        <motion.div
          className="text-6xl mb-4"
          animate={{
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 10 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {project.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs rounded-full glass border border-primary/30 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg glass hover:glass-strong transition-all duration-300"
            >
              <FiGithub className="text-lg" />
              <span className="text-sm">Code</span>
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white transition-all duration-300"
            >
              <FiExternalLink className="text-lg" />
              <span className="text-sm">Demo</span>
            </motion.a>
          )}
        </div>

        {/* Animated Corner */}
        <motion.div
          className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-gradient-to-br ${project.gradient} opacity-20`}
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.4 : 0.2,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
}
