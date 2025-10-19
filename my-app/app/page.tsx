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
            <Link 
              href="/workshops" 
              className="text-stone-600 hover:text-forest-800 transition-all duration-300 font-light tracking-wide text-sm uppercase"
            >
              Workshops
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className={`relative min-h-screen flex items-start justify-center px-8 pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <span className="text-sm font-light tracking-widest text-forest-700 uppercase">Premium Landscaping</span>
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
              beforeImage="/landscape1.jpg"
              afterImage="/landscape2.jpg"
              beforeLabel="Before"
              afterLabel="After"
              className="mb-8"
            />
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-16 px-8 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900">
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
                  <span className="text-2xl">📞</span>
                </div>
                <h4 className="text-xl font-light text-forest-900 mb-3">Phone</h4>
                <p className="text-stone-600 font-light text-lg">(555) 746-8343</p>
                <p className="text-stone-500 text-sm mt-2">Mon-Fri 9AM-6PM</p>
              </div>
              
              <div className="text-center group">
                <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-forest-200 transition-colors duration-300">
                  <span className="text-2xl">✉️</span>
                </div>
                <h4 className="text-xl font-light text-forest-900 mb-3">Email</h4>
                <p className="text-stone-600 font-light text-lg">hello@greenscape.com</p>
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
