'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import PageHeader from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import HeroSection from '@/components/common/HeroSection'
import Card from '@/components/common/Card'
import Button from '@/components/ui/Button'
import OrbitalCircles from '@/components/OrbitalCircles'
import OrbitingFeatures from '@/components/OrbitingFeatures'
import ECGWaveform from '@/components/ECGWaveForm'

export default function Home() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const featureCards = [
    {
      icon: '/images/img_vecteezymedicalicon3drenderingillustration28342546_1.png',
      title: 'Personalized Health Dashboard',
    },
    {
      icon: '/images/img_vecteezyfemaleathleteinactionyoungfitnesssportivegirlin48799740_1.png',
      title: 'Activity & Exercise Tracker',
    },
    {
      icon: '/images/img_vecteezyaigeneratedcartoonstylesushiboxbentoboxlunchbox41766305_1.png',
      title: 'Nutrition & Meal Planner',
    },
    {
      icon: '/images/img_vecteezy3dillustrationformfailed8505370_1.png',
      title: 'Progress Monitoring & Reports',
    },
    {
      icon: '/images/img_vecteezysmartwatchhealthfitnesstrackingappintegrationstylish54716186_1.png',
      title: 'Integration with Wearables',
    },
  ]

  const faqItems = [
    {
      question: 'What is Synapsis?',
      answer:
        'Synapsis is a digital health platform that connects users with advanced medical services. It offers easy access to healthcare support through smart technology.',
    },
    {
      question: 'Is Synapsis available worldwide?',
      answer:
        'Yes, Synapsis is available in multiple countries. However, features may vary depending on location.',
    },
    {
      question: 'Which Smart Device are supported on Synapsis?',
      answer:
        'Synapsis supports smartphones, tablets, and smartwatches. It works on both Android and iOS platforms.',
    },
    {
      question: 'Is my personal information secure with Synapsis?',
      answer:
        'Yes, your data is protected using modern encryption technology. Synapsis follows strict privacy and security protocols.',
    },
    {
      question: 'Are there any Membership?',
      answer:
        'Synapsis offers both free and premium membership plans. Users can choose based on their healthcare needs.',
    },
    {
      question: 'Does Synapsis offer advanced Health Organizer?',
      answer:
        'Yes, Synapsis connects users with top health organizations. It helps in scheduling appointments, consultations, and more.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#000510]">
      <PageHeader />

      <HeroSection />

      {/* Feature Icons Section */}
      <section id="features" className="py-16 px-4 md:px-12 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="text-lg">
              Featured <span className="text-[#fe568d]">Synapsis</span>
            </span>
            <h2 className="text-4xl font-semibold mt-2">
              Simplify Your Health Journey
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                icon={card.icon}
                title={card.title}
                className="h-[234px]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section className="py-16 px-4 md:px-12 lg:px-16 mb-44">
        <div className="container mx-auto relative">
          {' '}
          {/* Added relative positioning here */}
          <div className="mb-8">
            <span className="text-lg">
              Why choose <span className="text-[#fe568d]">Synapsis</span>
            </span>
            <h2 className="text-4xl font-semibold mt-2">
              Features of the Synapsis mobile application
            </h2>
          </div>
          {/* Changed from grid to flex layout, now only contains first column */}
          <div className="flex flex-col lg:flex-row gap-8 mt-10 items-center">
            {/* First column - features text */}
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-start">
                <div className="mr-4">
                  <Image
                    src="/images/img_frame_51.svg"
                    alt="Feature"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <p className="text-white text-base">
                  User-friendly interface makes tracking effortless.
                </p>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-[rgba(255,255,255,0.1)] rounded-full w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/img_vector_pink_300.svg"
                    alt="Feature"
                    width={10}
                    height={15}
                  />
                </div>
                <p className="text-white text-base">
                  All-in-one solution eliminates the need for multiple apps.
                </p>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-[rgba(255,255,255,0.1)] rounded-full w-10 h-10 flex items-center justify-center">
                  <Image
                    src="/images/img_vector_pink_300.svg"
                    alt="Feature"
                    width={10}
                    height={15}
                  />
                </div>
                <p className="text-white text-base">
                  Data privacy ensures users' health data is protected.
                </p>
              </div>

              <div className="flex items-start">
                <div className="mr-4">
                  <Image
                    src="/images/img_frame_51_white_a700.svg"
                    alt="Feature"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
                <p className="text-white text-base">
                  Personalized health recommendations to help users make smarter
                  choices.
                </p>
              </div>
            </div>
          </div>
          {/* Second column - app images, now positioned absolutely relative to the container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2">
            <Image
              src="/images/img_group_85.png"
              alt="App Background"
              width={588}
              height={351}
              className="relative z-0 mt-44 lg:top-1/2  "
            />
            <div className="absolute z-10 w-full flex items-center justify-center">
              <Image
                src="/images/img_iphone_16_dark11_1.png"
                alt="iPhone"
                width={220}
                height={451}
                className="relative translate-y-1/4"
              />
              <Image
                src="/images/img_frame_48096356_1.png"
                alt="App Screen"
                width={305}
                height={121}
                className="absolute top-[160px] left-1/2 transform -translate-x-1/2 translate-y-1/2"
              />
              <Image
                src="/images/img_frame_48096350_1.png"
                alt="App Screen"
                width={317}
                height={185}
                className="absolute top-[360px] left-1/2 transform -translate-x-1/2 translate-y-1/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Showcase Section */}
      <section className="py-16 px-4 md:px-12 lg:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Content - Top on mobile, right on desktop */}
          <div className="w-full md:w-1/2 text-right md:order-2 order-1 mb-8 md:mb-0">
            <div>
              <span className="text-lg">
                We deliver <span className="text-[#fe568d]">best solution</span>
              </span>
              <h2 className="text-4xl font-semibold mt-2 ml-auto text-right md:text-right ">
                Track your fitness, nutrition,
                <br />
                and progress in one place.
              </h2>
            </div>
          </div>

          {/* Orbiting Features - Bottom on mobile, left on desktop */}
          <div className="w-full md:w-1/2 -translate-x-1/4 flex md:justify-start justify-start md:order-1 order-2">
            <div className="relative mt-8 md:mt-0 mx-auto md:mx-0 sm:max-w-min">
              <OrbitingFeatures />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-12 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="text-lg">
              Always by <span className="text-[#fe568d]">your side</span>
            </span>
            <h2 className="text-4xl font-semibold mt-2">
              Be the first to use our Synapsis!
            </h2>
          </div>

          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 mt-10 shadow-card relative overflow-hidden">
            <ECGWaveform />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                <div className="bg-[rgba(255,255,255,0.1)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-feature">
                  <Image
                    src="/images/img_ixhealth.svg"
                    alt="Health Tracker"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Health Tracker</h3>
                <p className="text-[#ffffff99]">
                  Get Real-time health insights designed specifically for body
                  and lifestyle.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[rgba(255,255,255,0.1)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-feature">
                  <Image
                    src="/images/img_iconparkoutlineplan.svg"
                    alt="Care Plans"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Care Plans</h3>
                <p className="text-[#ffffff99]">
                  Follow custom-built routines that match your personal health
                  goals.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[rgba(255,255,255,0.1)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-feature">
                  <Image
                    src="/images/img_siinsightsfill.svg"
                    alt="Progress Insights"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">Progress Insights</h3>
                <p className="text-[#ffffff99]">
                  Visualize your journey and celebrate
                  <br />
                  milestone along the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-16 px-4 md:px-12 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <span className="text-lg">
              Popular <span className="text-[#fe568d]">questions</span>
            </span>
            <h2 className="text-4xl font-semibold mt-2">
              Learn more about Synapsis
            </h2>
          </div>

          <div className="mt-10 space-y-4 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl overflow-hidden"
              >
                <div
                  className="p-4 flex justify-between items-center cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-xl font-medium">{item.question}</h3>
                  <Image
                    src="/images/img_frame_169.svg"
                    alt="Expand"
                    width={32}
                    height={32}
                    className={`transform transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                  />
                </div>
                <div
                  className={`faq-content overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedIndex === index
                      ? 'max-h-[200px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 pb-4 pt-0 text-[#ffffff99]">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-12 lg:px-16">
        <div className="container mx-auto">
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8 shadow-card relative overflow-hidden">
            <Image
              src="/images/img_frame_11.png"
              alt="Background"
              width={440}
              height={210}
              className="absolute right-0 top-0 z-0"
            />

            <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
              <div className="mb-8 md:mb-0">
                <h2 className="text-4xl font-semibold mb-4">
                  Empower Your Health with One Click
                </h2>
                <p className="text-[#ffffff99]">
                  Our app is available on both Platform Android and ios
                </p>
              </div>

              <Button
                variant="primary"
                size="medium"
                className="px-6"
                rightIcon={
                  <Image
                    src="/images/img_frame.svg"
                    alt="Download"
                    width={20}
                    height={20}
                  />
                }
                onClick={() => console.log('Download clicked')}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
