import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image src="/86hire-logo.png" alt="86Hire Logo" width={180} height={60} className="h-14 w-auto" />
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-[#003772] hover:text-[#fb7323] hover:bg-white/50 backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#003772] mb-6">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last updated: July 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using 86Hire ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  86Hire is a hiring platform designed specifically for restaurant owners and managers. The Service helps users streamline their hiring process by connecting to job posting platforms, presenting candidate information in a card-based format, and facilitating candidate communication.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">3. User Accounts</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    To use certain features of the Service, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain and update your account information to keep it accurate, current, and complete</li>
                    <li>Maintain the security of your password and accept all risks of unauthorized access to your account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Ensure that you exit from your account at the end of each session</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">4. Acceptable Use</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    You agree not to use the Service to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe upon the rights of others</li>
                    <li>Upload, post, or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable</li>
                    <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                    <li>Attempt to gain unauthorized access to the Service or its related systems or networks</li>
                    <li>Use the Service for any commercial purpose not expressly permitted by these Terms</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">5. Privacy and Data Protection</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices regarding the collection and use of your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">6. Intellectual Property</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    The Service and its original content, features, and functionality are and will remain the exclusive property of 86Hire and its licensors. The Service is protected by copyright, trademark, and other laws.
                  </p>
                  <p className="text-gray-700">
                    You retain ownership of any content you submit to the Service, but you grant us a license to use, modify, and display such content in connection with providing the Service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">7. Third-Party Services</h2>
                <p className="text-gray-700 mb-4">
                  The Service may integrate with third-party platforms such as Indeed. Your use of such third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the content or practices of any third-party services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">8. Disclaimers</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  <p className="text-gray-700">
                    We do not guarantee that the Service will be uninterrupted, secure, or error-free, or that any defects will be corrected.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  IN NO EVENT SHALL 86HIRE, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">10. Termination</h2>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                  </p>
                  <p className="text-gray-700">
                    If you wish to terminate your account, you may simply discontinue using the Service.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">11. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">12. Governing Law</h2>
                <p className="text-gray-700 mb-4">
                  These Terms shall be interpreted and governed by the laws of the State of Georgia, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">13. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> sales@oriencareers.com<br />
                    <strong>Address:</strong> Atlanta, Georgia<br />
                    <strong>Website:</strong> 86Hire.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#003772] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Image src="/86hire-logo.png" alt="86Hire Logo" width={120} height={40} className="h-10 w-auto mb-2" />
              <p className="text-gray-300">© 2025 86Hire</p>
              <p className="text-gray-300">Built in Atlanta</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="mailto:sales@oriencareers.com" className="text-gray-300 hover:text-[#fb7323]">
                sales@oriencareers.com
              </a>
              <div className="flex space-x-4">
                <Link href="/privacy" className="text-gray-300 hover:text-[#fb7323]">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-300 hover:text-[#fb7323]">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 