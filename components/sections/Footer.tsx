'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart, FiTwitter } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FiGithub,
    url: 'https://github.com/Dhanushcr18',
    color: 'hover:text-gray-300',
  },
  {
    name: 'LinkedIn',
    icon: FiLinkedin,
    url: 'https://www.linkedin.com/in/dhanush-c-r',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Twitter',
    icon: FiTwitter,
    url: 'https://x.com/Dhanushcr18',
    color: 'hover:text-sky-400',
  },
  {
    name: 'Instagram',
    icon: FiInstagram,
    url: 'https://www.instagram.com/d_h_a_n_u_s_h.98?igsh=emVpcDY4NjF2OWJ6',
    color: 'hover:text-pink-400',
  },
  {
    name: 'Email',
    icon: FiMail,
    url: 'mailto:dhadhanush.234@gmail.com',
    color: 'hover:text-purple-400',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-dark-card border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-glow-blue rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-8"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target={social.name === 'Email' ? undefined : '_blank'}
              rel={social.name === 'Email' ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`glass p-4 rounded-full ${social.color} transition-all duration-300 group relative`}
            >
              <social.icon className="text-2xl" />
              
              {/* Neon glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(14, 165, 233, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400"
        >
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className="hover:text-primary transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </motion.nav>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center text-gray-400"
        >
          <p className="flex items-center justify-center gap-2">
            Made with <FiHeart className="text-red-500 animate-pulse" /> by{' '}
            <span className="text-gradient font-semibold">Dhanush</span>
          </p>
          <p className="mt-2 text-sm">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-4 left-4 w-20 h-20 border border-primary/30 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-4 right-4 w-16 h-16 border border-secondary/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>
    </footer>
  );
}
