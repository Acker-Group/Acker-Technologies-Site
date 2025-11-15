import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Acker Technologies: Empowering African Developers',
  description: 'Acker Technologies is the technology and innovation subsidiary of Acker Group SA (Pty Ltd). We empower small developers and businesses with tools, services, and products that simplify modern development. Based in Centurion, Gauteng, South Africa.',
  keywords: 'Acker Technologies, developer tools, SaaS, African developers, South Africa, Acker Group SA, freemium developer platforms, indie developers, small tech startups',
  authors: [{ name: 'Acker Technologies' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Acker Technologies: Build. Grow. Connect.',
    description: 'Empowering small developers and businesses with tools that simplify modern development.',
    url: 'https://acker-technologies.com',
    siteName: 'Acker Technologies',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acker Technologies: Build. Grow. Connect.',
    description: 'Empowering African developers with world-class tools and platforms.',
    creator: '@ackertechnologies',
  },
  robots: {
    index: true,
    follow: true,
  },
}

import Background from '@/components/Background'

// ... existing code ...
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Navbar />
        <main className="relative">
          <Background />
          <div className="relative z-10">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
