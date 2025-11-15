'use client'

import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  useEffect(() => {
    const particleContainer = document.getElementById('particle-container');
    if (!particleContainer) return;
    particleContainer.innerHTML = ''; // Clear existing particles

    const particles = 50;
    for (let i = 0; i < particles; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white';
      const size = Math.random() * 2 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      const animationDuration = Math.random() * 20 + 15; // 15 to 35 seconds
      particle.animate([
        { transform: `translate(0, 0) scale(1)`, opacity: Math.random() },
        { transform: `translate(${Math.random() * 100 - 50}vw, ${Math.random() * 100 - 50}vh) scale(${Math.random()})`, opacity: 0 }
      ], {
        duration: animationDuration * 1000,
        easing: 'linear',
        iterations: Infinity,
        delay: Math.random() * -animationDuration * 1000
      });

      particleContainer.appendChild(particle);
    }
  }, []);

  return (
    <motion.section 
      className="relative text-white py-32 sm:py-40 px-4 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-300"
          variants={itemVariants}
        >
          Build. Grow. Connect.
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-blue-800 dark:text-blue-100 max-w-3xl mx-auto mb-12"
          variants={itemVariants}
        >
          Empowering Africa's developers with a seamless ecosystem of tools, platforms, and opportunities.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <Link
            href="/subsidiaries"
            className="px-8 py-4 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300 shadow-lg transform hover:scale-105 w-full sm:w-auto"
          >
            Discover Our Ecosystem
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-blue-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
