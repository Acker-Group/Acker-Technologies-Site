'use client'

import Hero from '@/components/Hero'
import Card from '@/components/Card'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Code, Layers, Cpu, ShoppingCart, Cloud, BookOpen, Zap, ArrowRight } from 'lucide-react'

export default function Home() {
  const subsidiaries = [
    {
      title: 'Acker Developers',
      description: 'Core dev tools hub: SDKs, APIs for prototyping, code collaboration, and AI debugging.',
      link: '#',
      icon: <Code size={28} className="text-blue-500" />,
    },
    {
      title: 'Acker Design',
      description: 'Canva-style editing platform: drag-and-drop graphics, templates, and AI enhancements.',
      link: '#',
      icon: <Layers size={28} className="text-blue-500" />,
    },
    {
      title: 'Acker AI Solutions',
      description: 'AI/ML tools: predictive analytics, NLP for code, and enterprise solutions.',
      link: '#',
      icon: <Cpu size={28} className="text-blue-500" />,
    },
    {
      title: 'Acker Marketplace',
      description: 'Plugin/extension ecosystem for developers to buy, sell, and share tools.',
      link: '#',
      icon: <ShoppingCart size={28} className="text-blue-500" />,
    },
    {
      title: 'Acker Cloud',
      description: 'Hosting for dev projects: auto-scaling, Docker support, and usage-based pricing.',
      link: '#',
      icon: <Cloud size={28} className="text-blue-500" />,
    },
    {
      title: 'Acker EduTech',
      description: 'Learning platforms: courses, certifications, and corporate training programs.',
      link: '#',
      icon: <BookOpen size={28} className="text-blue-500" />,
    },
    {
      title: 'Acker Innovate',
      description: 'R&D incubation: VR/blockchain projects, equity stakes, and IP licensing.',
      link: '#',
      icon: <Zap size={28} className="text-blue-500" />,
    },
  ]

  const features = [
    {
      title: 'For Developers, By Developers',
      description: 'We understand the grind. Our tools are built with the developer experience at their core, designed to be intuitive, powerful, and a joy to use.',
      icon: <Code size={32} className="mb-4 text-blue-500" />,
    },
    {
      title: 'Integrated Ecosystem',
      description: 'From coding and design to deployment and learning, our subsidiaries form a cohesive ecosystem that supports you at every stage of your project.',
      icon: <Layers size={32} className="mb-4 text-blue-500" />,
    },
    {
      title: 'Fueling African Innovation',
      description: 'We are passionately committed to empowering the next wave of African tech talent with world-class tools and platforms.',
      icon: <Zap size={32} className="mb-4 text-blue-500" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="bg-transparent">
      <Hero />
      
      {/* Why Acker Technologies Section */}
      <section className="py-20 sm:py-24 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16 sm:mb-20"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">Why Acker Technologies?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;re not just building tools. We&apos;re crafting the future of African development with an ecosystem designed for growth and innovation.
            </p>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8 sm:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section className="py-20 sm:py-24 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16 sm:mb-20"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">An Ecosystem of Innovation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the powerful, interconnected companies under the Acker Technologies umbrella, each designed to empower your development journey.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.slice(0, 6).map((sub, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={sub.link} className="block p-6 sm:p-8 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group h-full">
                  <div className="flex items-center mb-4">
                    {sub.icon}
                    <h3 className="text-lg sm:text-xl font-bold ml-4 text-gray-900 dark:text-white">{sub.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{sub.description}</p>
                  <div className="flex items-center mt-6 text-blue-600 dark:text-blue-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16 sm:mt-20">
            <Link 
              href="/subsidiaries"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg transform hover:scale-105"
            >
              <span>Explore All Subsidiaries</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold mb-6 tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ready to Build the Future?
          </motion.h2>
          <motion.p 
            className="text-lg text-blue-100 mb-10"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join a growing community of innovators and get access to the tools you need to succeed.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              href="/contact"
              className="inline-block px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-all duration-300 shadow-2xl transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
