'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Background() {
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
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-gray-900"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      <div id="particle-container" className="absolute inset-0 opacity-20" />
    </div>
  )
}
