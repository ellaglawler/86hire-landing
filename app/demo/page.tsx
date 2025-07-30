import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, Zap, CheckCircle, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function DemoPage() {
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#003772] to-[#004a94] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6">Book Your 86Hire Demo</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            See how 86Hire can transform your restaurant hiring process in just 15 minutes
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Demo Form */}
            <div className="lg:order-2">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-[#003772] mb-2">Schedule Your Demo</h2>
                    <p className="text-gray-600">15-minute personalized walkthrough</p>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name *</label>
                        <Input
                          id="firstName"
                          type="text"
                          placeholder="Your first name"
                          className="h-12"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name *</label>
                        <Input
                          id="lastName"
                          type="text"
                          placeholder="Your last name"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="restaurantName" className="text-sm font-medium text-gray-700">Restaurant Name *</label>
                      <Input
                        id="restaurantName"
                        type="text"
                        placeholder="Your restaurant name"
                        className="h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address *</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@restaurant.com"
                        className="h-12"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="role" className="text-sm font-medium text-gray-700">Your Role *</label>
                      <select
                        id="role"
                        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb7323] focus:border-transparent"
                        required
                      >
                        <option value="">Select your role</option>
                        <option value="owner">Restaurant Owner</option>
                        <option value="manager">General Manager</option>
                        <option value="hr">HR Manager</option>
                        <option value="operations">Operations Manager</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="hiringVolume" className="text-sm font-medium text-gray-700">Monthly Hiring Volume *</label>
                      <select
                        id="hiringVolume"
                        className="w-full h-12 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb7323] focus:border-transparent"
                        required
                      >
                        <option value="">Select hiring volume</option>
                        <option value="1-5">1-5 hires per month</option>
                        <option value="6-15">6-15 hires per month</option>
                        <option value="16-30">16-30 hires per month</option>
                        <option value="30+">30+ hires per month</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">Additional Notes</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your hiring challenges or specific questions..."
                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#fb7323] focus:border-transparent resize-none"
                      ></textarea>
                    </div>

                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" required />
                      <span className="text-sm text-gray-600">
                        I agree to be contacted about 86Hire and understand my data will be handled according to the{" "}
                        <Link href="#" className="text-[#fb7323] hover:underline">Privacy Policy</Link>
                      </span>
                    </div>

                    <Button type="submit" className="w-full bg-[#fb7323] hover:bg-[#e5651f] text-white h-12 text-lg font-bold">
                      Schedule Demo
                      <Calendar className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Benefits & Info */}
            <div className="lg:order-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-[#003772] mb-4">What You'll See</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Get a personalized walkthrough of how 86Hire can solve your specific hiring challenges.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#fb7323] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#003772] mb-2">Live Platform Demo</h3>
                      <p className="text-gray-600">
                        See 86Hire in action with real candidate data and the swipe-to-hire interface.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#fb7323] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#003772] mb-2">Customized for Your Needs</h3>
                      <p className="text-gray-600">
                        We'll tailor the demo to your specific hiring volume and restaurant type.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#fb7323] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#003772] mb-2">15 Minutes, No Pressure</h3>
                      <p className="text-gray-600">
                        Quick, focused demo with plenty of time for your questions. No sales pitch.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#fb7323] rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#003772] mb-2">Free Trial Access</h3>
                      <p className="text-gray-600">
                        Get immediate access to test 86Hire with your own job postings after the demo.
                      </p>
                    </div>
                  </div>
                </div>

                <Card className="bg-[#003772] text-white p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-bold mb-4">Demo Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-[#fb7323]" />
                        <span>15 minutes</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-[#fb7323]" />
                        <span>Video call (Zoom/Teams)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-[#fb7323]" />
                        <span>Flexible scheduling</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-[#fb7323]" />
                        <span>Remote - no travel needed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#003772] mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-[#003772] mb-3">What happens during the demo?</h3>
              <p className="text-gray-600">
                We'll walk you through the 86Hire platform, show you how to connect your Indeed job postings, 
                demonstrate the swipe-to-hire interface, and answer any questions about the process.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-[#003772] mb-3">Do I need to prepare anything?</h3>
              <p className="text-gray-600">
                No preparation needed! Just bring your questions about restaurant hiring challenges. 
                We'll handle the rest and show you exactly how 86Hire works.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-[#003772] mb-3">Is there any commitment required?</h3>
              <p className="text-gray-600">
                Absolutely not. The demo is completely free with no obligation. We want you to see the value 
                before making any decisions about using 86Hire.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-[#003772] mb-3">Can I try 86Hire after the demo?</h3>
              <p className="text-gray-600">
                Yes! After the demo, you'll get immediate access to test 86Hire with your own job postings 
                for free during our beta period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#fb7323] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to See 86Hire in Action?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Book your demo today and see how we can transform your hiring process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#demo-form">
              <Button size="lg" className="bg-white text-[#fb7323] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Schedule Demo Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#fb7323] px-8 py-4 text-lg font-bold bg-transparent"
              >
                Back to Home
              </Button>
            </Link>
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