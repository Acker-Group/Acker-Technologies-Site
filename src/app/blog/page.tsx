import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Acker Technologies',
  description: 'Insights, tutorials, and updates from Acker Technologies. Stay informed about the latest in development tools and technology.',
  openGraph: {
    title: 'Acker Technologies Blog',
    description: 'Tech insights, tutorials, and developer resources.',
    url: 'https://acker-technologies.com/blog',
  },
}

export default function Blog() {
  return (
    <div className="flex-1 bg-card">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-white mb-6 text-center">Blog</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-primary mb-8">
            Coming soon. Stay tuned for updates, insights, and tech news from Acker Technologies.
          </p>
          
          <Link
            href="/"
            className="inline-block px-10 py-4 border-2 border-accent text-accent font-semibold rounded-lg transition uppercase tracking-wide hover:bg-accent hover:text-primary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
