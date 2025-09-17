'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const PageHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="py-6 px-4 md:px-12 lg:px-16 border-b border-[rgba(255,255,255,0.1)]">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/img_logo_2_1.png"
                alt="Synapsis Logo"
                width={33}
                height={36}
                className="mr-2"
              />
              <span className="text-2xl font-bold font-source-sans-pro">
                Synapsis
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-white text-base font-medium hover:text-pink-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#features"
              className="text-white text-base font-medium hover:text-pink-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#pricing"
              className="text-white text-base font-medium hover:text-pink-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#device"
              className="text-white text-base font-medium hover:text-pink-400 transition-colors"
            >
              Device
            </Link>
            <Link
              href="/#faqs"
              className="text-white text-base font-medium hover:text-pink-400 transition-colors"
            >
              FAQs
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button variant="primary" size="medium">
              Join Waitlist
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[rgba(255,255,255,0.05)] rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/#about"
                className="text-white text-base font-medium hover:text-pink-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/#features"
                className="text-white text-base font-medium hover:text-pink-400 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/#pricing"
                className="text-white text-base font-medium hover:text-pink-400 transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/#device"
                className="text-white text-base font-medium hover:text-pink-400 transition-colors"
              >
                Device
              </Link>
              <Link
                href="/#faqs"
                className="text-white text-base font-medium hover:text-pink-400 transition-colors"
              >
                FAQs
              </Link>
              <Button variant="primary" size="medium" className="w-full">
                Download
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default PageHeader
