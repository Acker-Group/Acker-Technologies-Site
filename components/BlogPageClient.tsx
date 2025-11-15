"use client"

import { motion, Variants } from 'framer-motion'
import { Calendar, User, ArrowRight } from 'lucide-react'

interface Post {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  color: string;
}

const posts: Post[] = []

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

export default function BlogPageClient() {
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
            Tech Insights & Innovation
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Thought leadership on African technology, software development best practices, and the future of innovation on the continent.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          {posts.length > 0 ? (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {posts.map((post) => (
                <motion.div
                  key={post.title}
                  className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 group"
                  variants={itemVariants}
                >
                  <div className={`h-2 bg-gradient-to-r ${post.color}`}></div>
                  <div className="p-6 sm:p-8">
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r ${post.color} text-white rounded-full`}>
                        {post.category}
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${post.color} transition-colors duration-300 h-16 sm:h-auto">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 h-24 sm:h-20">
                      {post.description}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2 sm:space-y-0">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                    <div className="mt-6">
                      <button className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-200 group-hover:from-blue-500 group-hover:to-sky-500 flex items-center">
                        Read More <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Coming Soon</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">We're working on new content. Please check back later!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
