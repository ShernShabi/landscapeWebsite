'use client'

import { useState } from 'react'

const BookingModal = ({ isOpen, onClose }) => {
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: ''
  }

  const [formData, setFormData] = useState(initialFormState)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form and close modal
    setFormData(initialFormState)
    setIsSubmitting(false)
    onClose()
    
    // Show success message (you can replace this with actual form submission)
    alert('Thank you! We\'ll contact you within 24 hours to schedule your consultation.')
  }

  if (!isOpen) return null

  const isPhoneEntered = formData.phone.trim().length > 0

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl scrollbar-hide">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-stone-200 px-8 py-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-thin text-forest-900 font-serif">Schedule Your Consultation</h2>
              <p className="text-stone-600 font-light mt-2">Let's bring your vision to life</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <span className="text-stone-600 text-xl">×</span>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 font-light"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 font-light"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 font-light"
              placeholder="(555) 123-4567"
            />
          </div>

          {isPhoneEntered && (
            <>
              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Property Type
                  </label>
                  <div className="relative">
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 font-light appearance-none bg-white"
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="multi-family">Multi-family</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 font-light appearance-none bg-white"
                    >
                      <option value="">Select project type</option>
                      <option value="garden-design">Garden Design</option>
                      <option value="landscape-installation">Landscape Installation</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="outdoor-living">Outdoor Living Space</option>
                      <option value="complete-redesign">Complete Redesign</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Timeline
                  </label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 font-light appearance-none bg-white"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="planning">Just planning for now</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Budget Range
                  </label>
                  <div className="relative">
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-10 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 font-light appearance-none bg-white"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-30k">$15,000 - $30,000</option>
                      <option value="30k-50k">$30,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="discuss">Prefer to discuss</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">
                  Tell us about your vision
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 font-light resize-none"
                  placeholder="Describe your dream outdoor space, any specific requirements, or questions you have..."
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-forest-900 text-white py-4 px-8 rounded-lg font-light tracking-wide text-sm uppercase hover:bg-forest-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Free Consultation'}
            </button>
            <p className="text-xs text-stone-500 text-center mt-3">
              We'll contact you within 24 hours to confirm your consultation
            </p>
          </div>
        </form>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar { 
          display: none;  /* Safari and Chrome */
        }
      `}</style>
    </div>
  )
}

export default BookingModal
