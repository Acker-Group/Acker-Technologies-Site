import Link from 'next/link'
import { Mail, Twitter, Linkedin, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      href: 'mailto:Contact@Acker-Technologies.com', 
      icon: <Mail size={20} />,
      label: 'Email'
    },
    { 
      href: 'https://twitter.com/ackertechnologies', 
      icon: <Twitter size={20} />,
      label: 'X (Twitter)'
    },
    { 
      href: 'https://linkedin.com/company/ackertechnologies', 
      icon: <Linkedin size={20} />,
      label: 'LinkedIn'
    },
  ]

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/subsidiaries', label: 'Subsidiaries' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-blue-400">Acker Technologies</h3>
            <p className="mt-2 text-sm">
              A technology and innovation subsidiary of <span className="font-semibold text-blue-300">Acker Group SA (Pty Ltd)</span>
            </p>
            <div className="flex items-center mt-4 gap-2 text-sm">
              <MapPin size={16} className="text-gray-500" />
              <span>Centurion, Gauteng, South Africa</span>
            </div>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-blue-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <div className="flex items-center gap-4">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Acker Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}