import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Acker Technologies | Our Mission & Vision',
  description: 'Learn about Acker Technologies mission to build scalable, intelligent technology solutions that empower businesses and developers across Africa.',
  openGraph: {
    title: 'About Acker Technologies',
    description: 'Building world-class developer tools and platforms.',
    url: 'https://acker-technologies.com/about',
  },
}

export default function About() {
  return (
    <div className="flex-1 bg-card">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-white mb-6 text-center">About Acker Technologies</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary rounded-lg p-8 mb-8 border-2 border-accent/20">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-primary leading-relaxed">
              To build scalable, intelligent technology solutions that empower businesses and developers across Africa and beyond.
            </p>
          </div>
          
          <div className="bg-secondary rounded-lg p-8 mb-8 border-2 border-accent/20">
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-lg text-primary leading-relaxed">
              To be Africa&apos;s leading technology innovation company, recognized for building world-class developer tools and platforms.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-accent text-primary font-bold rounded-lg hover:opacity-90 transition shadow-lg uppercase tracking-wide"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
