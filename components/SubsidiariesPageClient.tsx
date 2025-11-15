"use client"

import { motion, Variants } from 'framer-motion'
import { Briefcase, Zap, Code, ShoppingCart, Cloud, BookOpen, FlaskConical } from 'lucide-react'

const subsidiaries = [
  {
    title: 'Acker Developers',
    description: 'Core dev tools hub offering SDKs, APIs for prototyping, code collaboration, and AI debugging.',
    icon: Code,
    color: 'from-blue-500 to-sky-500',
  },
  {
    title: 'Acker Design',
    description: 'Canva-style editing platform featuring drag-and-drop graphics, templates for UI mockups, and AI enhancements.',
    icon: Zap,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Acker AI Solutions',
    description: 'AI/ML tools including predictive analytics, natural language processing for code analysis, and enterprise AI solutions.',
    icon: FlaskConical,
    color: 'from-emerald-500 to-green-500',
  },
  {
    title: 'Acker Marketplace',
    description: 'Plugin and extension ecosystem where developers buy, sell, and share tools.',
    icon: ShoppingCart,
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Acker Cloud',
    description: 'Hosting platform for dev projects with auto-scaling, Docker support, and CI/CD integration.',
    icon: Cloud,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'Acker EduTech',
    description: 'Learning platforms offering courses, certifications, and corporate training programs.',
    icon: BookOpen,
    color: 'from-rose-500 to-pink-500',
  },
  {
    title: 'Acker Innovate',
    description: 'R&D incubation lab for emerging technologies like VR and blockchain.',
    icon: Briefcase,
    color: 'from-slate-500 to-gray-500',
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function SubsidiariesPageClient() {
  return (
    <div className="bg-transparent text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Our Ecosystem
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Acker Technologies is more than a company—it&apos;s a synergistic ecosystem of platforms and services designed to empower modern developers and designers.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {subsidiaries.map((sub) => {
              const Icon = sub.icon
              return (
                <motion.div
                  key={sub.title}
                  className="relative overflow-hidden rounded-2xl p-1 group"
                  variants={itemVariants}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${sub.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  <div className="relative bg-white dark:bg-gray-900 rounded-xl h-full p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
                    <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${sub.color}`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {sub.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {sub.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
