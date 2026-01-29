'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-glow-purple rounded-full blur-3xl opacity-10" />

      <div ref={ref} className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image with 3D Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue via-primary to-secondary p-1"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="w-full h-full bg-dark rounded-2xl" />
              </motion.div>

              {/* Profile Image Placeholder */}
              <div className="absolute inset-4 glass-strong rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <motion.div
                    className="text-6xl"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    👨‍💻
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-neon-blue to-primary rounded-full opacity-50 blur-xl"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-neon-purple rounded-full opacity-50 blur-xl"
                animate={{
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                Hello! 👋
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I am an <span className="text-primary font-semibold">Information Science & Engineering</span> student 
                passionate about <span className="text-secondary font-semibold">AI, web development</span>, and 
                <span className="text-neon-blue font-semibold"> modern UI design</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                I love creating <span className="text-gradient font-semibold">beautiful, interactive experiences</span> that 
                combine cutting-edge technology with intuitive design.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Currently exploring the intersection of <span className="text-primary font-semibold">artificial intelligence</span> and 
                <span className="text-secondary font-semibold"> web technologies</span> to build the future.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Projects', value: '10+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Experience', value: '2+ Yrs' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass p-4 rounded-xl text-center hover:glass-strong transition-all duration-300"
                >
                  <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
