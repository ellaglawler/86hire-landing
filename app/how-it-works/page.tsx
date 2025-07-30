import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Users, Target, Zap, Shield, Smartphone, Laptop } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HowItWorksPage() {
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
          <h1 className="text-4xl md:text-6xl font-black mb-6">How 86Hire Works</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Transform your hiring process from hours of resume reading to minutes of smart decisions
          </p>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#003772] mb-6">Three Simple Steps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From job posting to hired candidate in minutes, not hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center relative">
              <div className="bg-[#fb7323] text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#003772] mb-4">Connect Your Job Post</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Link your Indeed job posting. 86Hire automatically pulls in all your applicants and transforms them into our unique candidate cards.
              </p>
              <div className="mt-6">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">I</span>
                    </div>
                    <span className="text-gray-500">+</span>
                    <div className="w-8 h-8 bg-[#fb7323] rounded flex items-center justify-center">
                      <span className="text-white text-sm font-bold">86</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center relative">
              <div className="bg-[#fb7323] text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#003772] mb-4">Swipe Through Candidates</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Each candidate card shows only what matters: skills, experience, and years worked. No names, no photos, no bias—just the facts you need to make smart hiring decisions.
              </p>
              <div className="mt-6">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✕</span>
                    </div>
                    <div className="w-16 h-10 bg-gray-200 rounded-lg border-2 border-dashed border-gray-400 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">CARD</span>
                    </div>
                    <div className="w-12 h-8 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center relative">
              <div className="bg-[#fb7323] text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#003772] mb-4">Schedule Interviews Fast</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Swipe right to send an instant interview invitation. Swipe left to send a polite rejection. 86Hire handles all the communication automatically.
              </p>
              <div className="mt-6">
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-8 h-8 bg-[#fb7323] rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">📅</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#003772] mb-6">Why It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for restaurant hiring challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003772] mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Review 50 candidates in 5 minutes instead of 5 hours. Make hiring decisions in seconds, not days.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003772] mb-2">Bias-Free Hiring</h3>
                <p className="text-gray-600">
                  No names, no photos, no unconscious bias. Focus purely on skills, experience, and qualifications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003772] mb-2">Mobile-First</h3>
                <p className="text-gray-600">
                  Review candidates on your phone between shifts. Perfect for busy restaurant managers on the go.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Laptop className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003772] mb-2">Seamless Integration</h3>
                <p className="text-gray-600">
                  Works with Indeed. No new job boards to manage or learn.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003772] mb-2">Time Savings</h3>
                <p className="text-gray-600">
                  Get back to running your restaurant instead of reading resumes. Hours saved every week.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003772] mb-2">Better Hires</h3>
                <p className="text-gray-600">
                  Focus on what matters leads to better hiring decisions and lower turnover rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#003772] mb-6">Before vs After</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See the difference 86Hire makes in your hiring process
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-2 border-red-200 bg-red-50">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">Traditional Hiring</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <p className="text-gray-700">Hours spent reading resumes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <p className="text-gray-700">Unconscious bias affects decisions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <p className="text-gray-700">Great candidates get lost in the pile</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <p className="text-gray-700">Manual communication with candidates</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✕</span>
                    </div>
                    <p className="text-gray-700">High turnover from poor hiring decisions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">With 86Hire</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Minutes to review candidates</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Bias-free, skills-focused decisions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Best candidates rise to the top</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Automated candidate communication</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">Better hires, lower turnover</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#fb7323] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to Transform Your Hiring?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Join restaurant owners who are already hiring faster and smarter with 86Hire
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signin">
              <Button size="lg" className="bg-white text-[#fb7323] hover:bg-gray-100 px-8 py-4 text-lg font-bold">
                Get Started Free
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