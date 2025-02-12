"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  BarChart3,
  PieChart,
  TrendingUp,
  ShieldCheck,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm">
        <Link className="flex items-center justify-center" href="#">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-blue-600">Wealth Invest Co.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600" href="#services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600" href="#packages">
            Packages
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600" href="#contact">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600" href="/news">
            Login
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600" href="/team">
            Our Team
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white relative overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="Investment Background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="container px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure Your Financial Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Expert wealth management and investment strategies tailored to your goals.
                </p>
              </div>
              <div className="space-x-4">
                <Link href='/login'>
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                </Link>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" style={{color:'black'}}>
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
              <p className="mt-4 max-w-[700px] text-gray-700 md:text-xl">
                At Wealth Invest Co., we are dedicated to helping our clients achieve their financial goals through
                expert advice, innovative strategies, and personalized service. With decades of experience in the
                financial industry, our team of professionals is committed to your success.
              </p>
            </motion.div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Services</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <BarChart3 className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Investment Management</h3>
                <p className="text-gray-700">
                  Our expert team analyzes market trends and manages your portfolio to maximize returns while minimizing
                  risk. We offer a range of investment options including stocks, bonds, mutual funds, and ETFs.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <PieChart className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Financial Planning</h3>
                <p className="text-gray-700">
                  We create comprehensive financial plans tailored to your unique situation. This includes retirement
                  planning, tax strategies, estate planning, and more to ensure a secure financial future.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <ShieldCheck className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Risk Management</h3>
                <p className="text-gray-700">
                  We help you identify and mitigate financial risks through insurance planning, diversification
                  strategies, and regular portfolio reviews to protect your wealth in all market conditions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="packages" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Investment Packages</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Starter Package</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$2,000</p>
                <ul className="mb-6 space-y-2">
                  <li>✓ Potential return: Up to $3,000</li>
                  <li>✓ 6-month investment period</li>
                  <li>✓ Low-risk investment strategy</li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Growth Package</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$5,000</p>
                <ul className="mb-6 space-y-2">
                  <li>✓ Potential return: Up to $8,000</li>
                  <li>✓ 12-month investment period</li>
                  <li>✓ Balanced risk-reward strategy</li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4">Premium Package</h3>
                <p className="text-3xl font-bold text-blue-600 mb-4">$10,000</p>
                <ul className="mb-6 space-y-2">
                  <li>✓ Potential return: Up to $18,000</li>
                  <li>✓ 18-month investment period</li>
                  <li>✓ Aggressive growth strategy</li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Us</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="mb-4">
                  Have questions or ready to start your investment journey? Get in touch with our expert team today.
                </p>
                <p className="mb-2">
                  <strong>Address:</strong> 123 Finance Street, New York, NY 10001
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> (555) 123-4567
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> info@wealthinvestco.com
                </p>
              </motion.div>
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-sm text-gray-400">
                Wealth Invest Co. is your trusted partner in financial growth and security.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/packages">Investment Packages</Link>
                </li>
                <li>
                  <Link href="/team">Our Team</Link>
                </li>
                <li>
                  <Link href="/news">Latest News</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-400">123 Finance Street, New York, NY 10001</p>
              <p className="text-sm text-gray-400">info@wealthinvestco.com</p>
              <p className="text-sm text-gray-400">(555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <LinkedIn className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2024 Wealth Invest Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

