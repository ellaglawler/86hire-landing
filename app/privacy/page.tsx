import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-black text-[#003772] mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: July 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              We collect information you provide directly to us, such as when you create an account, 
              use our services, or contact us for support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to provide, maintain, and improve our services, 
              communicate with you, and ensure a secure experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">5. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience 
              and collect information about how you use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">6. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our services may integrate with third-party platforms. These services have their own 
              privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">7. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to access, update, or delete your personal information. 
              Contact us to exercise these rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">8. Data Retention</h2>
            <p className="text-gray-700 mb-4">
              We retain your personal information for as long as necessary to provide our services 
              and comply with legal obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-4">
              Our services are not intended for children under 13. We do not knowingly collect 
              personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">10. International Transfers</h2>
            <p className="text-gray-700 mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">11. Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes 
              by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this privacy policy, please contact us at{" "}
              <a href="mailto:sales@oriencareers.com" className="text-[#fb7323] hover:underline">
                sales@oriencareers.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#003772] mb-4">13. California Privacy Rights</h2>
            <p className="text-gray-700 mb-4">
              California residents have additional rights regarding their personal information. 
              Please contact us for more information about these rights.
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