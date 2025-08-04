"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Users, Clock, Target, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image src="/86hire-logo.png" alt="86Hire Logo" width={180} height={60} className="h-14 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/how-it-works">
                <Button
                  variant="ghost"
                  className="text-[#003772] hover:text-[#fb7323] hover:bg-white/50 backdrop-blur-sm"
                >
                  How it Works
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="text-[#003772] hover:text-[#fb7323] hover:bg-white/50 backdrop-blur-sm"
                >
                  About Us
                </Button>
              </Link>
              <Link href="/signin">
                <Button className="bg-[#fb7323] hover:bg-[#e5651f] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Sign In/Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#003772] hover:text-[#fb7323]"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-3">
                <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-[#003772] hover:text-[#fb7323] hover:bg-white/50"
                  >
                    How it Works
                  </Button>
                </Link>
                <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-[#003772] hover:text-[#fb7323] hover:bg-white/50"
                  >
                    About Us
                  </Button>
                </Link>
                <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-[#fb7323] hover:bg-[#e5651f] text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Sign In/Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative text-white py-20 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/restaurant-hiring-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#003772]/70 to-[#004a94]/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="block mb-2">Hire faster.</span>
              <span className="text-[#fb7323] bg-white px-4 py-2 rounded-lg mt-4 inline-block">
                Skip the resume pile.
              </span>
            </h1>
            <div className="w-screen bg-[#003772]/90 py-2 -ml-[calc(50vw-50%)] mb-8">
              <p className="text-xl md:text-2xl mx-auto leading-relaxed text-white font-bold max-w-4xl px-4">
                86Hire helps restaurants hire faster by turning Indeed applicants into swipeable candidate cards: just
                skills and experience, no names or bias.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/signin">
                <Button size="lg" className="bg-[#fb7323] hover:bg-[#e5651f] text-white px-8 py-4 text-lg font-bold">
                  Sign In/Sign Up
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://calendly.com/oriencareers-sales/30min" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#003772] px-8 py-4 text-lg font-bold bg-transparent"
                >
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#003772] mb-6">Restaurant hiring is time-consuming</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restaurant owners spend hours every week manually sifting through resumes on Indeed, taking time away from
              providing quality service to customers.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003772] mb-2">Hours Wasted</h3>
                <p className="text-gray-600">
                  Manually reviewing hundreds of resumes takes valuable time away from your business
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003772] mb-2">High Turnover</h3>
                <p className="text-gray-600">Poor hiring decisions lead to constant recruiting and training cycles</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-[#003772] mb-2">Missed Opportunities</h3>
                <p className="text-gray-600">Great candidates get lost in the pile of traditional resume formats</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#003772] mb-6">How 86Hire Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform your hiring process
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#fb7323] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#003772] mb-4">Connect your job post</h3>
              <p className="text-gray-600 text-lg">
                We pull in your applicants from Indeed automatically — no extra work needed.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#fb7323] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#003772] mb-4">Swipe through candidates</h3>
              <p className="text-gray-600 text-lg">
                Each card shows just what matters: skills, experience, and years worked. No names or distractions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-[#fb7323] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#003772] mb-4">Schedule interviews fast</h3>
              <p className="text-gray-600 text-lg">
                Swipe right to send an interview link. Swipe left to send a polite rejection. That's it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#003772] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Why 86Hire?</h2>
            <p className="w-full text-base text-gray-200 text-center whitespace-nowrap mb-8">
              Built specifically for restaurant owners who need to hire fast and hire right.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-[#fb7323] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Saves hours of resume sorting</h3>
                <p className="text-gray-200">Get back to running your restaurant instead of reading resumes</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-[#fb7323] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Swipe-to-hire workflow is insanely fast</h3>
                <p className="text-gray-200">Make hiring decisions in seconds, not hours</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-[#fb7323] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">No names = less bias, better fits</h3>
                <p className="text-gray-200">Focus on skills and experience, not unconscious bias</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-[#fb7323] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Built for restaurant owners — not recruiters</h3>
                <p className="text-gray-200">Simple, intuitive interface designed for busy operators</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-[#fb7323] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Free during early beta testing</h3>
                <p className="text-gray-200">Get full access at no cost while we perfect the platform</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="h-8 w-8 text-[#fb7323] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Integrates with Indeed</h3>
                <p className="text-gray-200">Works with the job boards you already use</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 pb-2 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#003772] mb-6">
              Built for busy restaurant owners
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              86Hire was founded by three startup founders with experience in restaurant hiring. We're passionate about helping restaurants and hospitality businesses hire faster and better, so you can focus on what matters most: your guests and your team.
            </p>
            <div className="w-full max-w-2xl">
              <Image
                src="/team-photo.jpg"
                alt="86Hire Founders at Demo Day"
                width={800}
                height={350}
                className="rounded-xl object-cover object-[center_40%] aspect-[16/7] w-full h-auto shadow-lg border border-gray-200"
                priority
              />
            </div>
            <div className="mt-0">
              <Image src="/86hire-logo.png" alt="86Hire Logo" width={600} height={200} className="h-48 w-auto mx-auto" />
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
