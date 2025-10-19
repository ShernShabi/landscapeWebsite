'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import BookingModal from '../components/BookingModal'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <nav className="flex justify-between items-center">
            <h1 className="text-3xl font-light tracking-wide text-forest-900 font-serif">GreenHeart Designs</h1>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="hidden sm:inline-flex bg-forest-900 text-white px-6 py-2 text-xs font-light tracking-wide uppercase rounded-full hover:bg-forest-800 transition-all duration-300"
              >
                Consultation
              </button>
              <Link 
                href="/workshops" 
                className="text-stone-600 hover:text-forest-800 transition-all duration-300 font-light tracking-wide text-sm uppercase"
              >
                Workshops
              </Link>
              <a
                href="tel:13107468343"
                className="text-forest-700 hover:text-forest-900 transition-colors duration-300 font-light tracking-wide text-sm uppercase"
              >
                (310) 746-8343
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className={`relative min-h-screen flex items-start justify-center px-8 pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-base sm:text-lg font-light tracking-[0.4em] text-forest-700 uppercase">Premium Landscaping</span>
            </div>
            <h2 
              className="text-6xl md:text-8xl font-thin text-forest-900 mb-8 leading-tight transition-transform duration-700 ease-out font-serif"
              style={{
                transform: `translateY(${Math.min(scrollY * 0.5, 200)}px)`,
                opacity: Math.max(1 - scrollY / 800, 0.3)
              }}
            >
              Transform Your
              <span className="block text-forest-700 font-light">Outdoor Space</span>
            </h2>
            <p 
              className="text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed mb-12 transition-all duration-700 ease-out"
              style={{
                transform: `translateY(${Math.min(scrollY * 0.3, 150)}px)`,
                opacity: Math.max(1 - scrollY / 1000, 0.2)
              }}
            >
              Crafting extraordinary landscapes that elevate your property with timeless elegance and sustainable beauty
            </p>
            <div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-700 ease-out"
              style={{
                transform: `translateY(${Math.min(scrollY * 0.2, 100)}px)`,
                opacity: Math.max(1 - scrollY / 1200, 0.1)
              }}
            >
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="group bg-forest-900 text-white px-12 py-4 font-light tracking-wide text-sm uppercase hover:bg-forest-800 transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-forest-800 to-forest-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="text-forest-800 hover:text-forest-600 font-light tracking-wide text-sm uppercase transition-colors duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Image Slider */}
        <section className="pt-8 pb-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-light tracking-widest text-forest-700 uppercase">Our Work</span>
              <h3 className="text-4xl font-thin text-forest-900 mt-4 font-serif">Featured Projects</h3>
            </div>
            
            <BeforeAfterSlider
              imageSets={[
                {
                  before: "/landscape1before.jpg",
                  after: "/landscape1bafter.jpg",
                  beforeLabel: "Before",
                  afterLabel: "After"
                }
              ]}
              className="mb-8"
            />
          </div>
        </section>

        {/* Booking Section */}
        <section id="consultation" className="py-16 px-8 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-sm font-light tracking-widest text-forest-200 uppercase">Exclusive Service</span>
            </div>
            <h3 className="text-5xl font-thin text-white mb-8 font-serif">Book a Free Private Consultation</h3>
            <p className="text-xl text-forest-100 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            See your future backyard come to life through a personalized consultation that turns your ideas into a clear vision.            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="group bg-white text-forest-900 px-12 py-4 font-light tracking-wide text-sm uppercase hover:bg-stone-50 transition-all duration-300 transform hover:scale-105"
              >
                Schedule Now
              </button>
              <div className="text-forest-200 text-sm font-light">
                <span className="block">Available 7 days a week</span>
                <span className="text-forest-300">Premium service guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-light tracking-widest text-forest-700 uppercase">Creative Experiences</span>
              <h3 className="text-4xl font-thin text-forest-900 mt-4 font-serif">Design With Nature</h3>
            </div>
            
            <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-3xl p-12 text-center relative overflow-hidden">
              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-forest-600 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-forest-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-forest-400 rounded-full"></div>
              </div>
              
              <div className="relative max-w-3xl mx-auto">
                <h4 className="text-2xl font-light text-forest-900 mb-6 font-serif">
                  Interactive Workshops & Private Events
                </h4>
                <p className="text-lg text-stone-600 font-light leading-relaxed mb-8">
                  Immerse yourself in hands-on creative sessions where you'll learn to design with nature. 
                  Perfect for personal growth or celebrating special moments with loved ones.
                </p>
                
                <div className="flex flex-col gap-4 items-center">
                  <Link 
                    href="/workshops"
                    className="bg-forest-900 text-white px-8 py-4 rounded-lg font-light tracking-wide text-sm uppercase hover:bg-forest-800 transition-all duration-300 transform hover:scale-105"
                  >
                    Book a Workshop
                  </Link>
                  <span className="text-stone-500 text-sm font-light text-center">
                    Available for individuals & groups
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-light tracking-widest text-forest-700 uppercase">Connect With Us</span>
              <h3 className="text-4xl font-thin text-forest-900 mt-4 font-serif">Get In Touch</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forest-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-light text-forest-900 mb-3">Phone</h4>
                <p className="text-stone-600 font-light text-lg">(310) 746-8343</p>
                <p className="text-stone-500 text-sm mt-2">Mon-Fri 9AM-6PM</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forest-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-forest-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-light text-forest-900 mb-3">Email</h4>
                <p className="text-stone-600 font-light text-lg">bluecity2000@gmail.com</p>
                <p className="text-stone-500 text-sm mt-2">Response within 24 hours</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
      />
    </div>
  )
}
