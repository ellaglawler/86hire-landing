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
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-[#003772] mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  At 86Hire ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our hiring platform and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#003772] mb-3">2.1 Personal Information</h3>
                  <p className="text-gray-700 mb-4">
                    We may collect the following personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Restaurant name and business information</li>
                    <li>Job title and role within your organization</li>
                    <li>Account credentials and profile information</li>
                    <li>Communication preferences</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#003772] mb-3">2.2 Usage Information</h3>
                  <p className="text-gray-700 mb-4">
                    We automatically collect certain information about your use of our Service:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Log data (IP address, browser type, access times, pages viewed)</li>
                    <li>Device information (device type, operating system)</li>
                    <li>Usage patterns and interactions with the platform</li>
                    <li>Performance data and error reports</li>
                  </ul>

                  <h3 className="text-xl font-bold text-[#003772] mb-3">2.3 Candidate Information</h3>
                  <p className="text-gray-700 mb-4">
                    When you use our Service to review candidates, we may process candidate information from job posting platforms (such as Indeed) that you have authorized us to access. This information is processed in accordance with our agreements with these platforms and applicable privacy laws.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">3. How We Use Your Information</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Provide, maintain, and improve our hiring platform</li>
                    <li>Process your account registration and manage your account</li>
                    <li>Connect to job posting platforms and retrieve candidate information</li>
                    <li>Facilitate communication between you and candidates</li>
                    <li>Send you important updates about our Service</li>
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Analyze usage patterns to improve our platform</li>
                    <li>Comply with legal obligations and enforce our terms</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">4. Information Sharing and Disclosure</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist us in operating our platform, conducting business, or servicing you</li>
                    <li><strong>Job Posting Platforms:</strong> We may share information with platforms like Indeed to facilitate the integration and retrieval of candidate data</li>
                    <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal process</li>
                    <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction</li>
                    <li><strong>Consent:</strong> We may share information with your explicit consent</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">5. Data Security</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication measures</li>
                    <li>Employee training on data protection practices</li>
                    <li>Incident response procedures</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">6. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">7. Your Rights and Choices</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
                    <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                    <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">8. Cookies and Tracking Technologies</h2>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our platform. These technologies help us:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze how you use our platform</li>
                    <li>Provide personalized content and features</li>
                    <li>Improve our services and user experience</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    You can control cookie settings through your browser preferences, though disabling certain cookies may affect platform functionality.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">9. Third-Party Links and Services</h2>
                <p className="text-gray-700 mb-4">
                  Our platform may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our Service is not intended for children under the age of 16. We do not knowingly collect personal information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">11. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[#003772] mb-4">13. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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