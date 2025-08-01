import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Search, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
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
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-[#003772] mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003772] mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist. 
              It might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          <div className="mb-12">
            <Link href="/">
              <Button size="lg" className="bg-[#fb7323] hover:bg-[#e5651f] text-white px-8 py-4 text-lg font-bold">
                <Home className="mr-2 h-5 w-5" />
                Go to Homepage
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#003772] mb-3">Popular Pages</h3>
              <div className="space-y-3">
                <Link href="/signin" className="block text-[#fb7323] hover:underline">
                  Sign In / Sign Up
                </Link>
                <Link href="/how-it-works" className="block text-[#fb7323] hover:underline">
                  How It Works
                </Link>
                <Link href="https://calendly.com/oriencareers-sales/30min" target="_blank" rel="noopener noreferrer" className="block text-[#fb7323] hover:underline">
                  Book a Demo
                </Link>
                <Link href="/about" className="block text-[#fb7323] hover:underline">
                  About Us
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-[#003772] mb-3">Need Help?</h3>
              <div className="space-y-3">
                <a href="mailto:sales@oriencareers.com" className="block text-[#fb7323] hover:underline">
                  Contact Support
                </a>
                <Link href="/how-it-works" className="block text-[#fb7323] hover:underline">
                  Learn More
                </Link>
                <Link href="/demo" className="block text-[#fb7323] hover:underline">
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 mb-4">
              Can't find what you're looking for? Try searching or contact our support team.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="mailto:sales@oriencareers.com" className="text-[#fb7323] hover:underline">
                sales@oriencareers.com
              </a>
            </div>
          </div>
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