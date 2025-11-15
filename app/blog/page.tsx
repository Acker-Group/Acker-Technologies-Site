import type { Metadata } from 'next'
import BlogPageClient from '@/components/BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog | Acker Technologies',
  description: 'Insights on technology trends, African tech ecosystem, and innovation in software development.',
}

export default function BlogPage() {
  return <BlogPageClient />
}

