'use client'

import { motion } from 'framer-motion'
import { Briefcase, Zap, ShieldCheck, Users, Award } from 'lucide-react'
import Image from 'next/image'

export default function AboutPageClient() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: 'Integrity and Accountability',
      description: 'We operate with transparency, honesty, and take responsibility for our actions and commitments.',
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Innovation with Purpose',
      description: 'We drive meaningful technological advancement that solves real problems for developers and businesses.',
    },
    {
      icon: <Briefcase className="w-8 h-8 text-blue-500" />,
      title: 'Sustainable Growth',
      description: 'We build for the long term, ensuring financial stability and continuous improvement.',
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Community and Partnership',
      description: 'We foster collaboration, support small businesses, and create opportunities for all stakeholders.',
    },
    {
      icon: <Award className="w-8 h-8 text-blue-500" />,
      title: 'Quality Above All',
      description: 'We maintain world-class standards in our products, services, and customer experiences.',
    },
  ]

  const team = [
    {
      name: 'Tyler Acker',
      role: 'Founder & CEO',
      ownership: '60% shareholder of Acker Group SA',
      bio: 'Visionary founder driving innovation across technology, hospitality, and media sectors. Tyler founded Acker Group SA on October 15, 2025, with a mission to build a diverse portfolio of South African companies that empower the local economy.',
      image: '/tyler-acker.jpg', // Placeholder image path
    },
    {
      name: 'Xander Roux',
      role: 'Partner',
      ownership: '40% shareholder of Acker Group SA',
      bio: 'Strategic partner and co-founder bringing operational excellence and business development expertise. Xander works alongside Tyler to scale Acker Group&apos;s subsidiaries and foster sustainable growth across all business verticals.',
      image: '/xander-roux.jpg', // Placeholder image path
    },
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  return (
    <div className="bg-transparent text-gray-800 dark:text-gray-200">
      {/* Hero Section */}
      <motion.section 
        className="py-24 sm:py-32 text-center"
        initial="initial"
        animate="animate"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            Empowering Africa&apos;s Digital Future
          </motion.h1>
          <motion.p 
            className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Acker Technologies is the innovation engine of <strong>Acker Group SA</strong>, dedicated to building world-class developer tools and platforms from the heart of South Africa.
          </motion.p>
        </div>
      </motion.section>

      {/* Company Overview */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission & Vision</h2>
            </motion.div>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Our mission is to empower small developers and businesses with tools, services, and products that simplify modern development. We target freelancers, indie developers, and small tech startups.
              </p>
              <p>
                As a 100% owned subsidiary of Acker Group SA, we manage seven nested subsidiaries focused on developer tools, SaaS products, and innovation, all headquartered in Centurion, Gauteng.
              </p>
              <p>
                Our portfolio forms a comprehensive ecosystem, from the Acker Developers hub to Acker Cloud hosting, designed for seamless integration and maximum productivity.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="relative h-64 sm:h-80 rounded-lg overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image src="/about-mission.jpg" alt="Team working on code" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="p-6 sm:p-8 text-center bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center items-center mb-4 w-16 h-16 mx-auto bg-blue-100 dark:bg-gray-700 rounded-full">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Leadership Team
            </h2>
          </motion.div>
          <div className="space-y-12">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                className="grid md:grid-cols-3 gap-8 items-center"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className={`relative h-48 w-48 sm:h-64 sm:w-64 mx-auto md:mx-0 rounded-full overflow-hidden shadow-xl ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                </div>
                <div className="md:col-span-2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-blue-500 font-semibold mt-1">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-4 italic">
                    {member.ownership}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
