import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Mail, Lock, User, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-[#003772] mb-2">Welcome to 86Hire</h2>
            <p className="text-gray-600">Sign in to your account or create a new one</p>
          </div>

          <Card className="shadow-xl border-0">
            <CardContent className="p-8">
              <Tabs defaultValue="signin" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="signin" className="text-[#003772]">Sign In</TabsTrigger>
                  <TabsTrigger value="signup" className="text-[#003772]">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="signin" className="space-y-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-gray-300" />
                        <span className="text-sm text-gray-600">Remember me</span>
                      </label>
                      <Link href="#" className="text-sm text-[#fb7323] hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Button type="submit" className="w-full bg-[#fb7323] hover:bg-[#e5651f] text-white h-12 text-lg font-bold">
                      Sign In
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup" className="space-y-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="firstName"
                            type="text"
                            placeholder="First name"
                            className="pl-10 h-12"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="lastName"
                            type="text"
                            placeholder="Last name"
                            className="pl-10 h-12"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="restaurantName" className="text-sm font-medium text-gray-700">Restaurant Name</label>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="restaurantName"
                          type="text"
                          placeholder="Your restaurant name"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="signupEmail" className="text-sm font-medium text-gray-700">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="signupEmail"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="signupPassword" className="text-sm font-medium text-gray-700">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="signupPassword"
                          type="password"
                          placeholder="Create a password"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          className="pl-10 h-12"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300" required />
                      <span className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link href="/terms" className="text-[#fb7323] hover:underline">Terms of Service</Link>
                        {" "}and{" "}
                        <Link href="/privacy" className="text-[#fb7323] hover:underline">Privacy Policy</Link>
                      </span>
                    </div>
                    <Button type="submit" className="w-full bg-[#fb7323] hover:bg-[#e5651f] text-white h-12 text-lg font-bold">
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Questions?{" "}
              <Link href="mailto:sales@oriencareers.com" className="text-[#fb7323] hover:underline">
                Contact our support team
              </Link>
            </p>
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
    </div>
  )
} 