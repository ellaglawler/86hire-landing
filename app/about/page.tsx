import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Calendar, Clock, Users, Zap, CheckCircle, Phone, Mail, MapPin, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-6xl font-black mb-6">About 86Hire</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Three startup founders with restaurant experience, building the future of hiring
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#003772] mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We're three startup founders who've experienced firsthand the pain of restaurant hiring. 
                Between us, we've spent countless hours sifting through resumes, dealing with high turnover, 
                and watching great candidates get lost in the traditional hiring process.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                That's why we built 86Hire - to transform how restaurants find and hire talent. 
                We believe hiring should be fast, fair, and focused on what actually matters: skills and experience.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Based in Atlanta, we're passionate about helping restaurant owners and managers 
                get back to what they do best - running amazing restaurants.
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/team-photo.jpg"
                alt="86Hire Founders"
                width={500}
                height={300}
                className="rounded-xl object-cover aspect-[5/3] w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#003772] mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              To help restaurants hire faster, smarter, and with less bias
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#003772] mb-3">Speed</h3>
                <p className="text-gray-600">
                  Transform hours of resume reading into minutes of smart decisions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#003772] mb-3">Fairness</h3>
                <p className="text-gray-600">
                  Remove unconscious bias by focusing on skills and experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-[#fb7323] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#003772] mb-3">Better Hires</h3>
                <p className="text-gray-600">
                  Help restaurants build stronger, more reliable teams
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="h-8 w-8 text-[#fb7323] mr-3" />
            <h2 className="text-3xl font-black text-[#003772]">Built in Atlanta</h2>
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're proud to be part of Atlanta's growing tech and restaurant community. 
            Our city's vibrant food scene and entrepreneurial spirit inspire everything we build.
          </p>
          <div className="bg-white rounded-xl p-6 inline-block">
            <p className="text-gray-700">
              <strong>86Hire</strong><br />
              Atlanta, Georgia<br />
              <a href="mailto:sales@oriencareers.com" className="text-[#fb7323] hover:underline">
                sales@oriencareers.com
              </a>
            </p>
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
            <Link href="https://calendly.com/oriencareers-sales/30min" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#fb7323] px-8 py-4 text-lg font-bold bg-transparent"
              >
                Book a Demo
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