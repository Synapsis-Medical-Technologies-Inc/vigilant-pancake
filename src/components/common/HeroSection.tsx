'use client'

import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-16 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-10"
          />
        ))}
      </div>

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="z-10">
            <div className="inline-flex items-center px-4 py-1.5 bg-[rgba(46,112,179,0.15)] border border-[rgba(255,255,255,0.15)] rounded-full mb-4 backdrop-blur-sm">
              <span className="text-white text-base">
                Future of Health Care
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Empowering Health through our Synapsis App
            </h1>

            <p className="text-[#ffffffcc] text-base mb-8 max-w-lg">
              We envision a future where AI-driven healthcare assistance
              empowers individuals to take control of their well-being.
            </p>

            {/* <div>
              <Button
                variant="primary"
                size="medium"
                className="flex items-center relative overflow-hidden group"
                onClick={() => window.open('https://apps.apple.com', '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-center">
                  <Image
                    src="/images/img_vector.svg"
                    alt="Apple"
                    width={17}
                    height={20}
                    className="mr-2 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="relative">
                    Apple Store
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                  </span>
                </div>
              </Button>
            </div> */}

            <div className="mt-16 text-center">
              <div className="flex flex-col sm:flex-row justify-left items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-auto min-w-[300px]"
                />
                <Button
                  style={{ backgroundColor: '#f05c74', color: 'white' }}
                  className="group"
                >
                  Join Waitlist
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    size={16}
                  />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div
            className="relative lg:h-[500px] flex justify-center lg:justify-end"
            style={{
              perspective: '1000px',
            }}
          >
            {/* Multiple gradient blobs for more dynamic effect */}
            <div className="absolute w-[480px] h-[582px] rounded-full bg-gradient-to-tr from-blue-600/30 to-purple-600/20 opacity-20 blur-xl animate-pulse"></div>
            <div className="absolute w-[380px] h-[482px] top-10 right-10 rounded-full bg-gradient-to-bl from-cyan-500/20 to-blue-600/20 opacity-30 blur-lg animate-float"></div>

            {/* Phone mockup */}
            <div className="relative">
              <Image
                src="/images/img_free_mockup_of_female_hand_holding_iphone_14_pro_mockuuups_studio.png"
                alt="iPhone Mockup"
                width={480}
                height={582}
                className="relative z-10 drop-shadow-2xl translate-y-16 sm:translate-y-0"
              />
              {/* Shine effect on the phone */}
            </div>
            <div className="absolute w-[150%] h-[150%] left-[-20%] top-[-20%] bg-gradient-radial from-transparent via-[#121722]/20 to-[#121722]/40 mix-blend-normal z-20"></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#000510] to-transparent"></div>
    </section>
  )
}

export default HeroSection
