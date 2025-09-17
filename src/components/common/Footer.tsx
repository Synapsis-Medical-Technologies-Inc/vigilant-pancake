'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-4 md:px-12 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
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
            </div>
            <p className="text-[#ffffff99] mb-6">
              World's most advanced heart health and Fitness optimization tool
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
              >
                <Image
                  src="/images/img_frame_194.svg"
                  alt="Social"
                  width={15}
                  height={15}
                />
              </Link>
              <Link
                href="#"
                className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
              >
                <Image
                  src="/images/img_frame_195.svg"
                  alt="Social"
                  width={15}
                  height={15}
                />
              </Link>
              <Link
                href="#"
                className="w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors"
              >
                <Image
                  src="/images/img_vector_white_a700.svg"
                  alt="Social"
                  width={15}
                  height={15}
                />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-[#ffffff99] hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#benefits"
                  className="text-[#ffffff99] hover:text-white transition-colors"
                >
                  Benefits
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-[#ffffff99] hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="text-[#ffffff99] hover:text-white transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Other Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#error"
                  className="text-[#ffffff99] hover:text-white transition-colors"
                >
                  Error 404
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-[#ffffff99] hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[#ffffff99] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App */}
          <div className="col-span-1">
            <h3 className="text-lg font-medium mb-4">Download app</h3>
            <div className="space-y-4">
              <Link
                href="#"
                className="flex items-center bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors rounded-md p-3"
              >
                <div className="mr-3">
                  <Image
                    src="/images/img_google_play_logo.png"
                    alt="Google Play"
                    width={21}
                    height={23}
                  />
                </div>
                <div>
                  <div className="text-xs text-white">
                    <Image
                      src="/images/img_get_it_on.svg"
                      alt="Get it on"
                      width={36}
                      height={5}
                    />
                  </div>
                  <div className="text-sm text-white">
                    <Image
                      src="/images/img_google_play.svg"
                      alt="Google Play"
                      width={78}
                      height={15}
                    />
                  </div>
                </div>
              </Link>
              <Link
                href="#"
                className="flex items-center bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors rounded-md p-3"
              >
                <div className="mr-3">
                  <Image
                    src="/images/img_apple_logo.svg"
                    alt="Apple"
                    width={17}
                    height={22}
                  />
                </div>
                <div>
                  <div className="text-xs text-white">
                    <Image
                      src="/images/img_download_on_the.svg"
                      alt="Download on the"
                      width={70}
                      height={6}
                    />
                  </div>
                  <div className="text-sm text-white">
                    <Image
                      src="/images/img_app_store.svg"
                      alt="App Store"
                      width={76}
                      height={15}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#ffffff33] text-center">
          <p className="text-[#ffffff66] text-sm">
            Copyright ©2025 Synapsis medical Technologies Inc. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
