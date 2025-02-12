"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  TrendingUp,
} from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Default credentials
    const defaultEmail = "sophiavergara@gmail.com"
    const defaultPassword = "jeorgeandsophia"

    if (email === defaultEmail && password === defaultPassword) {
      // Redirect to the investment page if credentials are correct
      router.push("/investment")
    } else {
      setError("Invalid email or password. Please try again.")
    }
  }

  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-blue-600">Wealth Invest Co.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600" href="#services">
            Services
          </Link>
        </nav>
      </header>

      <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4">
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="mb-4">
              <Label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <Label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </Label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="******************"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
              </Button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
