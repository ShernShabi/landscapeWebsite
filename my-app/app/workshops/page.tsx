import Link from 'next/link'

export default function Workshops() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-stone-100/90 backdrop-blur-md border-b border-amber-200 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-light tracking-wide text-forest-900 font-serif">
              GreenHeart Designs
            </Link>
            <Link 
              href="/" 
              className="text-stone-600 hover:text-forest-800 transition-all duration-300 font-light tracking-wide text-sm uppercase"
            >
              Home
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <span className="text-sm font-light tracking-widest text-forest-700 uppercase">Educational Excellence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-thin text-forest-900 mb-8 leading-tight font-serif">
              Join Our
              <span className="block text-forest-700 font-light">Workshops</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
              Discover the art of landscaping through our exclusive educational programs
            </p>
          </div>
        </section>

        {/* Hiring Section */}
        <section className="py-24 px-8 bg-gradient-to-br from-forest-900 via-forest-800 to-forest-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-sm font-light tracking-widest text-forest-200 uppercase">Career Opportunity</span>
              <h2 className="text-5xl font-thin text-white mt-4 mb-8 font-serif">We're Hiring Workshop Instructors</h2>
              <p className="text-xl text-forest-100 max-w-4xl mx-auto font-light leading-relaxed">
                Share your landscaping expertise with our community. We're seeking passionate 
                professionals to lead hands-on workshops in garden design, plant care, and sustainable landscaping.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light text-white mb-6">What We Offer</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-forest-300 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-light text-white mb-1">Competitive Compensation</h4>
                        <p className="text-forest-200 font-light">Premium hourly rates for qualified instructors</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-forest-300 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-light text-white mb-1">Flexible Scheduling</h4>
                        <p className="text-forest-200 font-light">Work around your existing commitments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-forest-300 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-light text-white mb-1">Professional Development</h4>
                        <p className="text-forest-200 font-light">Grow your skills and network</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-2 h-2 bg-forest-300 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="text-lg font-light text-white mb-1">Premium Facilities</h4>
                        <p className="text-forest-200 font-light">Access to our state-of-the-art garden spaces</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center">
                <h3 className="text-2xl font-light text-white mb-6">Ready to Teach?</h3>
                <p className="text-forest-200 font-light mb-8">
                  Join our team of expert instructors and inspire the next generation of landscapers
                </p>
                <button className="group bg-white text-forest-900 px-12 py-4 font-light tracking-wide text-sm uppercase hover:bg-stone-50 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Workshops & Contact */}
        <section className="py-24 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Upcoming Workshops */}
              <div className="bg-amber-50 rounded-3xl p-12 shadow-xl border border-amber-200">
                <div className="mb-8">
                  <span className="text-sm font-light tracking-widest text-forest-700 uppercase">Schedule</span>
                  <h3 className="text-3xl font-thin text-forest-900 mt-4 font-serif">Upcoming Workshops</h3>
                </div>
                
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors duration-300">
                        <span className="text-2xl">🌱</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-light text-forest-900 mb-2">Garden Design Basics</h4>
                        <p className="text-stone-600 font-light mb-2">Learn the fundamentals of landscape design</p>
                        <p className="text-stone-500 text-sm">March 15, 2024 • 2:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors duration-300">
                        <span className="text-2xl">🌿</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-light text-forest-900 mb-2">Sustainable Landscaping</h4>
                        <p className="text-stone-600 font-light mb-2">Eco-friendly design principles</p>
                        <p className="text-stone-500 text-sm">March 22, 2024 • 2:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors duration-300">
                        <span className="text-2xl">✂️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-light text-forest-900 mb-2">Plant Care & Maintenance</h4>
                        <p className="text-stone-600 font-light mb-2">Expert techniques for plant health</p>
                        <p className="text-stone-500 text-sm">March 29, 2024 • 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-amber-50 rounded-3xl p-12 shadow-xl border border-amber-200">
                <div className="mb-8">
                  <span className="text-sm font-light tracking-widest text-forest-700 uppercase">Get In Touch</span>
                  <h3 className="text-3xl font-thin text-forest-900 mt-4 font-serif">Contact Us</h3>
                </div>
                
                <p className="text-stone-600 font-light mb-8 leading-relaxed">
                  Interested in teaching or attending workshops? We'd love to hear from you.
                </p>
                
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors duration-300">
                        <span className="text-xl">✉️</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-light text-forest-900">Email</h4>
                        <p className="text-stone-600 font-light">workshops@greenscape.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-amber-300 transition-colors duration-300">
                        <span className="text-xl">📞</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-light text-forest-900">Phone</h4>
                        <p className="text-stone-600 font-light">(555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-stone-200">
                  <button className="w-full bg-forest-900 text-white py-4 font-light tracking-wide text-sm uppercase hover:bg-forest-800 transition-all duration-300 transform hover:scale-105">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
