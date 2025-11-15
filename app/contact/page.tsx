import type { Metadata } from 'next'
import ContactPageClient from '@/components/ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us | Acker Technologies',
  description: 'Get in touch with Acker Technologies for partnerships, inquiries, or to learn more about our developer ecosystem.',
}

export default function ContactPage() {
  return <ContactPageClient />
}

