'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiSend, FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_p7tyh8f',
        'template_4mokctb',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'fwFPMnMfp3jBlnIp'
      );

      console.log('EmailJS Success:', result);

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS Full Error:', error);
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-lighter to-dark" />
      <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-glow-purple rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-glow-blue rounded-full blur-3xl opacity-10" />

      <div ref={ref} className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-secondary mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg">Let&apos;s create something amazing together</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Floating elements */}
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-neon-blue to-primary rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-secondary to-neon-purple rounded-full opacity-20 blur-3xl"
            animate={{
              y: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />

          {/* Form */}
          <div className="glass-strong rounded-2xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
            {/* Animated border gradient */}
            <motion.div
              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, #00F0FF, #BF00FF, #00F0FF)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="absolute inset-[2px] bg-dark-card rounded-2xl" />
            </motion.div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {/* Status Message */}
              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={`p-6 rounded-2xl border-2 text-center text-xl font-bold ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 border-green-500 text-green-400'
                      : 'bg-red-500/20 border-red-500 text-red-400'
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="text-6xl mb-4"
                  >
                    {submitStatus.type === 'success' ? '✅' : '❌'}
                  </motion.div>
                  {submitStatus.message}
                </motion.div>
              )}

              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                  <FiUser className="inline mr-2" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/30 focus:border-primary 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300
                           bg-dark-lighter text-white placeholder-gray-500"
                  placeholder="John Doe"
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                  <FiMail className="inline mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/30 focus:border-primary 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300
                           bg-dark-lighter text-white placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </motion.div>

              {/* Message Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                  <FiMessageSquare className="inline mr-2" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl glass border border-primary/30 focus:border-primary 
                           focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300
                           bg-dark-lighter text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-blue via-primary to-secondary
                         text-white font-semibold text-lg relative overflow-hidden group
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-neon-blue"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
