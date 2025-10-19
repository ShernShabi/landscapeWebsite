'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'

const DEFAULT_IMAGE_SETS = [
  { before: '/landscape1.jpg', after: '/landscape2.jpg', beforeLabel: 'Before', afterLabel: 'After' }
]

const TOUCH_OPTIONS = { passive: false }

function clamp (value, min, max) {
  if (value < min) return min
  if (value > max) return max
  return value
}

export default function BeforeAfterSlider ({ imageSets = DEFAULT_IMAGE_SETS, className = '' }) {
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const totalSets = imageSets.length
  const currentSet = imageSets[currentSetIndex]
  const isFirstSet = currentSetIndex === 0
  const isLastSet = currentSetIndex === totalSets - 1

  const setSliderFromClientX = useCallback(clientX => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()
    const relativeX = clientX - rect.left
    const percentage = clamp((relativeX / rect.width) * 100, 0, 100)
    setSliderPosition(percentage)
  }, [])

  const handleMouseDown = useCallback(event => {
    setIsDragging(true)
    setSliderFromClientX(event.clientX)
  }, [setSliderFromClientX])

  const handleMouseMove = useCallback(event => {
    if (!isDragging) return
    setSliderFromClientX(event.clientX)
  }, [isDragging, setSliderFromClientX])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback(event => {
    setIsDragging(true)
    const touch = event.touches[0]
    if (!touch) return
    setSliderFromClientX(touch.clientX)
  }, [setSliderFromClientX])

  const handleTouchMove = useCallback(event => {
    if (!isDragging) return
    const touch = event.touches[0]
    if (!touch) return
    event.preventDefault()
    setSliderFromClientX(touch.clientX)
  }, [isDragging, setSliderFromClientX])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  useEffect(() => {
    setSliderPosition(50)
  }, [currentSetIndex])

  useEffect(() => {
    if (!isDragging) return undefined

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('touchmove', handleTouchMove, TOUCH_OPTIONS)
    document.addEventListener('touchend', handleTouchEnd)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('touchmove', handleTouchMove, TOUCH_OPTIONS)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  const navigationDots = useMemo(() => (
    imageSets.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setCurrentSetIndex(index)}
        aria-label={`Show project ${index + 1}`}
        className={`w-2 h-2 rounded-full transition-all duration-200 ${
          index === currentSetIndex ? 'bg-forest-600' : 'bg-stone-300'
        }`}
      />
    ))
  ), [imageSets, currentSetIndex])

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div
        ref={containerRef}
        className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-stone-100"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute inset-0">
          <img
            src={currentSet.after}
            alt="After"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-stone-700 tracking-wide uppercase">
              {currentSet.afterLabel}
            </span>
          </div>
        </div>

        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={currentSet.before}
            alt="Before"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-stone-700 tracking-wide uppercase">
              {currentSet.beforeLabel}
            </span>
          </div>
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
          style={{ left: `${sliderPosition}%` }}
        />

        <div
          className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 cursor-ew-resize select-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center group hover:scale-110 transition-transform duration-200">
            <div className="w-0.5 h-6 bg-stone-300 group-hover:bg-stone-400 transition-colors duration-200" />
            <div className="absolute w-3 h-3 bg-forest-600 rounded-full shadow-sm" />
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {totalSets > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            type="button"
            onClick={() => setCurrentSetIndex(prev => Math.max(0, prev - 1))}
            disabled={isFirstSet}
            className="w-10 h-10 bg-white border border-stone-300 rounded-full flex items-center justify-center hover:bg-stone-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Previous project"
          >
            <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex space-x-2">
            {navigationDots}
          </div>

          <button
            type="button"
            onClick={() => setCurrentSetIndex(prev => Math.min(totalSets - 1, prev + 1))}
            disabled={isLastSet}
            className="w-10 h-10 bg-white border border-stone-300 rounded-full flex items-center justify-center hover:bg-stone-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Next project"
          >
            <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      <div className="text-center mt-4">
        <p className="text-sm text-stone-500 font-light">
          Drag the handle to compare images
          {totalSets > 1 && (
            <span className="block mt-1">
              Use arrows to view different projects
            </span>
          )}
        </p>
      </div>
    </div>
  )
}
