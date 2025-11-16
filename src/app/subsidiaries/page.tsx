import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Subsidiaries | Acker Technologies',
  description: 'Explore the technology solutions and platforms under Acker Technologies umbrella.',
  openGraph: {
    title: 'Acker Technologies Subsidiaries',
    description: 'Discover our ecosystem of developer tools and technology platforms.',
    url: 'https://acker-technologies.com/subsidiaries',
  },
}

export default function Subsidiaries() {
  return (
    <div className="flex-1 bg-card">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-white mb-6 text-center">Our Subsidiaries</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-secondary rounded-lg p-8 mb-8 border-2 border-accent/20">
            <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-lg text-primary leading-relaxed">
              Our ecosystem of technology solutions is under development. Check back soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
