'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBookOpen, FiBriefcase } from 'react-icons/fi';

const timeline = [
  {
    type: 'education',
    title: 'B.E. Information Science & Engineering',
    institution: 'Dayananda Sagar Academy of Technology and Management',
    shortName: 'DSATM',
    period: '2024 - 2028',
    description: 'Pursuing Bachelor of Engineering with focus on AI, Machine Learning, and Web Development',
    icon: FiBookOpen,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    type: 'experience',
    title: 'Web Development Projects',
    institution: 'Freelance & Personal',
    period: '2025 - Present',
    description: 'Building modern web applications with React, Next.js, and Three.js',
    icon: FiBriefcase,
    color: 'from-purple-500 to-pink-500',
  },
  {
    type: 'experience',
    title: 'AI & Machine Learning',
    institution: 'Academic Projects',
    period: '2025 - Present',
    description: 'Working on biometric systems, facial recognition, and deep learning models',
    icon: FiBriefcase,
    color: 'from-green-500 to-teal-500',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-card to-dark" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-glow-blue rounded-full blur-3xl opacity-10" />

      <div ref={ref} className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Experience & Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-primary to-secondary transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass-strong rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
                  >
                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-4`}>
                      <item.icon className="text-2xl text-white" />
                    </div>

                    {/* Period */}
                    <div className="text-sm text-primary font-semibold mb-2">
                      {item.period}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gradient transition-all duration-300">
                      {item.title}
                    </h3>

                    {/* Institution */}
                    <div className="text-secondary font-semibold mb-3">
                      {item.institution}
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(14, 165, 233, 0.7)',
                        '0 0 0 10px rgba(14, 165, 233, 0)',
                        '0 0 0 0 rgba(14, 165, 233, 0)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-4 border-dark`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
