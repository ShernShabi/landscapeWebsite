export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="px-6 py-8">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-900">
            Santa Monica Landscaping
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-emerald-700 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-700 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your
            <span className="text-emerald-700 block">Outdoor Space</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Professional landscaping services in Santa Monica, CA. 
            Creating beautiful, sustainable gardens that enhance your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors">
              Get Free Quote
            </button>
            <button className="border border-emerald-700 text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
              View Our Work
            </button>
          </div>
        </div>

        {/* Services Section */}
        <section id="services" className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Garden Design</h3>
              <p className="text-gray-600">Custom landscape designs tailored to your space and preferences.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✂️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Maintenance</h3>
              <p className="text-gray-600">Regular upkeep to keep your garden looking pristine year-round.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Plant Installation</h3>
              <p className="text-gray-600">Expert planting of trees, shrubs, and seasonal flowers.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <div className="bg-emerald-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-emerald-800 mb-4">Local Expertise</h3>
                <p className="text-gray-700 mb-6">
                  Based in Santa Monica, we understand the unique climate and soil conditions 
                  of the area. Our designs work with nature, not against it.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-emerald-700 mr-2">✓</span>
                    Sustainable, drought-resistant plants
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-700 mr-2">✓</span>
                    Licensed and insured professionals
                  </li>
                  <li className="flex items-center">
                    <span className="text-emerald-700 mr-2">✓</span>
                    10+ years of local experience
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+13105551234" 
              className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
            >
              Call (310) 555-1234
            </a>
            <a 
              href="mailto:info@santamonicalandscaping.com" 
              className="text-emerald-700 hover:text-emerald-800 font-semibold"
            >
              info@santamonicalandscaping.com
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-xl font-bold mb-4">Santa Monica Landscaping</div>
          <p className="text-gray-400 mb-4">Serving Santa Monica and surrounding areas</p>
          <p className="text-sm text-gray-500">
            © 2024 Santa Monica Landscaping. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
