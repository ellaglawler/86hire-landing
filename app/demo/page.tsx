import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, Zap, CheckCircle, Phone, Mail, MapPin, Star } from "lucide-react"
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
          <h1 className="text-4xl md:text-6xl font-black mb-6">Book Your Demo</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            See how 86Hire can transform your restaurant hiring in just 30 minutes
          </p>
        </div>
      </section>

      {/* Demo Booking Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-black text-[#003772] mb-6">Schedule Your Demo</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Join us for a personalized 30-minute demo where we'll show you exactly how 86Hire works 
                and answer all your questions about transforming your hiring process.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#fb7323] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003772]">30-Minute Session</h3>
                    <p className="text-gray-600">Quick, focused demo that fits your busy schedule</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#fb7323] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003772]">Personalized for You</h3>
                    <p className="text-gray-600">We'll tailor the demo to your specific hiring needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#fb7323] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003772]">Live Demo</h3>
                    <p className="text-gray-600">See the platform in action with real examples</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#fb7323] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003772]">No Pressure</h3>
                    <p className="text-gray-600">Learn about our solution with zero commitment</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="shadow-xl border-0">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#003772] mb-2">Ready to Get Started?</h3>
                  <p className="text-gray-600">Click below to schedule your demo</p>
                </div>
                
                <Link href="https://calendly.com/oriencareers-sales/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#fb7323] hover:bg-[#e5651f] text-white h-14 text-lg font-bold mb-4">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Demo
                  </Button>
                </Link>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Can't find a time that works?{" "}
                    <a href="mailto:sales@oriencareers.com" className="text-[#fb7323] hover:underline">
                      Email us
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#003772] mb-6">What You'll See</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get a comprehensive look at how 86Hire transforms your hiring process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#fb7323] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold text-[#003772] mb-2">Platform Walkthrough</h3>
                <p className="text-gray-600 text-sm">
                  See how easy it is to connect your Indeed job posting and start reviewing candidates
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#fb7323] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold text-[#003772] mb-2">Candidate Cards</h3>
                <p className="text-gray-600 text-sm">
                  Experience our unique candidate card format that removes bias and focuses on skills
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#fb7323] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold text-[#003772] mb-2">Swipe Interface</h3>
                <p className="text-gray-600 text-sm">
                  See how the intuitive swipe interface makes hiring decisions lightning fast
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#fb7323] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold text-[#003772] mb-2">Automated Communication</h3>
                <p className="text-gray-600 text-sm">
                  Learn how 86Hire automatically handles candidate communication for you
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#fb7323] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="text-lg font-bold text-[#003772] mb-2">Analytics & Insights</h3>
                <p className="text-gray-600 text-sm">
                  Discover how our analytics help you improve your hiring process over time
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-[#fb7323] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">6</span>
                </div>
                <h3 className="text-lg font-bold text-[#003772] mb-2">Q&A Session</h3>
                <p className="text-gray-600 text-sm">
                  Get all your questions answered by our restaurant hiring experts
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-[#003772] mb-4">Demo Details</h2>
                <p className="text-gray-600">Everything you need to know about your demo session</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#fb7323]" />
                    <span className="font-medium">Duration: 30 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-[#fb7323]" />
                    <span className="font-medium">Format: Video call</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-[#fb7323]" />
                    <span className="font-medium">Attendees: You + 1-2 team members</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#fb7323]" />
                    <span className="font-medium">No preparation needed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#fb7323]" />
                    <span className="font-medium">No commitment required</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#fb7323]" />
                    <span className="font-medium">Recording available</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#003772] mb-6">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#003772] mb-2">What if I need to reschedule?</h3>
                <p className="text-gray-600">
                  No problem! You can reschedule your demo up to 24 hours before the scheduled time. 
                  Just click the reschedule link in your confirmation email.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#003772] mb-2">Do I need to install anything?</h3>
                <p className="text-gray-600">
                  No installation required! We'll send you a simple video call link that works in any web browser.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#003772] mb-2">Can I bring my team?</h3>
                <p className="text-gray-600">
                  Absolutely! We encourage you to invite key decision makers from your team. 
                  Just let us know how many people will be joining.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#003772] mb-2">What happens after the demo?</h3>
                <p className="text-gray-600">
                  After your demo, we'll send you a follow-up email with next steps, pricing information, 
                  and any additional resources you requested.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#fb7323] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to See 86Hire in Action?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Book your demo today and discover how to hire faster and smarter
          </p>
          <Link href="https://calendly.com/oriencareers-sales/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-[#fb7323] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
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