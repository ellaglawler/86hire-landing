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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-black text-[#003772] mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: July 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing and using 86Hire ("the Service"), you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">2. Description of Service</h2>
            <p className="text-gray-700 mb-4">
              86Hire is a restaurant hiring platform that transforms Indeed applicants into swipeable candidate cards, 
              helping restaurant owners hire faster and with less bias.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">3. User Accounts</h2>
            <p className="text-gray-700 mb-4">
              You are responsible for maintaining the confidentiality of your account and password. 
              You agree to accept responsibility for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">4. Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">5. Acceptable Use</h2>
            <p className="text-gray-700 mb-4">
              You agree not to use the Service to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are owned by 86Hire and are protected by 
              international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">7. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, 
              including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall 86Hire, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">9. Disclaimer</h2>
            <p className="text-gray-700 mb-4">
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis. 86Hire makes no warranties, 
              expressed or implied, and hereby disclaims all warranties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">10. Governing Law</h2>
            <p className="text-gray-700 mb-4">
              These Terms shall be interpreted and governed by the laws of the State of Georgia, 
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us at{" "}
              <a href="mailto:sales@oriencareers.com" className="text-[#fb7323] hover:underline">
                sales@oriencareers.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">13. Entire Agreement</h2>
            <p className="text-gray-700 mb-4">
              These Terms constitute the entire agreement between you and 86Hire regarding the use of the Service.
            </p>
          </section>
        </div>
      </div>

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