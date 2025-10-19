'use client'

import { useState, useRef, useEffect } from 'react'

const BeforeAfterSlider = ({ 
  beforeImage, 
  afterImage, 
  beforeLabel = "Before", 
  afterLabel = "After",
  className = "" 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  // Handle mouse events
  const handleMouseDown = (e) => {
    setIsDragging(true)
    updateSliderPosition(e)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    updateSliderPosition(e)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true)
    updateSliderPosition(e.touches[0])
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    updateSliderPosition(e.touches[0])
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Update slider position based on mouse/touch position
  const updateSliderPosition = (e) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  // Add global event listeners when dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging])

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      {/* Main Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-stone-100"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0">
          <img
            src={beforeImage}
            alt="Before"
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* Before Label */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-stone-700 tracking-wide uppercase">
              {beforeLabel}
            </span>
          </div>
        </div>

        {/* After Image (Clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={afterImage}
            alt="After"
            className="w-full h-full object-cover"
            draggable={false}
          />
          {/* After Label */}
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-stone-700 tracking-wide uppercase">
              {afterLabel}
            </span>
          </div>
        </div>

        {/* Slider Line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        />

        {/* Slider Handle */}
        <div 
          className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-ew-resize select-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center group hover:scale-110 transition-transform duration-200">
            {/* Vertical Bar */}
            <div className="w-0.5 h-6 bg-stone-300 group-hover:bg-stone-400 transition-colors duration-200" />
            {/* Green Circle */}
            <div className="absolute w-3 h-3 bg-forest-600 rounded-full shadow-sm" />
          </div>
        </div>

        {/* Gradient Overlays for Better Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Instructions (Optional - can be removed) */}
      <div className="text-center mt-4">
        <p className="text-sm text-stone-500 font-light">
          Drag the handle to compare images
        </p>
      </div>
    </div>
  )
}

export default BeforeAfterSlider
