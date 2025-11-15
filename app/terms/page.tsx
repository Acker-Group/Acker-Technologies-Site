import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Acker Technologies',
  description: 'Terms of Service for Acker Technologies.',
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">Terms of Service</h1>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p>Last updated: November 15, 2025</p>

          <p>Please read these Terms of Service (&quot;Terms&quot;, &quot;Terms of Service&quot;) carefully before using the https://acker-technologies.com website (the &quot;Service&quot;) operated by Acker Technologies (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).</p>

          <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

          <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

          <h2>Accounts</h2>
          <p>When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

          <h2>Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Acker Technologies and its licensors. The Service is protected by copyright, trademark, and other laws of both the South Africa and foreign countries.</p>

          <h2>Links To Other Web Sites</h2>
          <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by Acker Technologies.</p>
          <p>Acker Technologies has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Acker Technologies shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>

          <h2>Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of South Africa, without regard to its conflict of law provisions.</p>

          <h2>Changes</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h2>Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li>By email: Contact@Acker-Technologies.com</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
