import type { Metadata } from 'next'
import SubsidiariesPageClient from '@/components/SubsidiariesPageClient'

export const metadata: Metadata = {
  title: 'Our Subsidiaries | Acker Technologies',
  description: 'Explore the innovative companies and platforms under Acker Technologies.',
}

export default function SubsidiariesPage() {
  return <SubsidiariesPageClient />
}

