import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Acker Technologies | Get In Touch',
  description: 'Have questions about our technology solutions? Contact Acker Technologies at Contact@Acker-Technologies.com. Based in Centurion, Gauteng, South Africa.',
  openGraph: {
    title: 'Contact Acker Technologies',
    description: 'Get in touch with our team for technology solutions and partnerships.',
    url: 'https://acker-technologies.com/contact',
  },
}

export default function Contact() {
  return (
    <div className="flex-1 bg-card">
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-5xl font-bold text-white mb-6 text-center">Contact Us</h1>
        <div className="w-24 h-1 bg-accent mx-auto mb-12"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary rounded-lg p-8 mb-8 border-2 border-accent/20 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-lg text-primary mb-6 leading-relaxed">
              Have questions about our technology solutions?
            </p>
            <div className="space-y-4 text-primary">
              <p>
                <span className="font-semibold text-accent">Email:</span>{' '}
                <a href="mailto:Contact@Acker-Technologies.com" className="text-accent hover:text-white transition">
                  Contact@Acker-Technologies.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-accent">Location:</span> Centurion, Gauteng, South Africa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
