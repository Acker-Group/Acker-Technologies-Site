import Link from 'next/link'
import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'

interface CardProps {
  title: string
  description: string
  link?: string
  external?: boolean
  icon?: ReactNode
}

export default function Card({ title, description, link, external = false, icon }: CardProps) {
  const cardVariants: Variants = {
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

  const content = (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group"
      variants={cardVariants}
    >
      {icon && (
        <div className="mb-6 text-blue-500 dark:text-blue-400">
          {icon}
        </div>
      )}
      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
        {description}
      </p>
      {link && (
        <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
          <span>Learn More</span>
          <svg 
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      )}
    </motion.div>
  )

  if (link) {
    if (external) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
          {content}
        </a>
      )
    }
    return (
      <Link href={link} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}
