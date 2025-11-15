import type { Metadata } from 'next'
import AboutPageClient from '@/components/AboutPageClient'

export const metadata: Metadata = {
  title: 'About Us | Acker Technologies',
  description: "Learn about Acker Technologies, our values, and the team driving Africa's tech innovation.",
}

export default function About() {
  return <AboutPageClient />
}