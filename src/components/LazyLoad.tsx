'use client'

import { useState, useEffect, ReactNode } from 'react'

interface LazyLoadProps {
  children: ReactNode
  fallback?: ReactNode
  rootMargin?: string
  threshold?: number
}

export default function LazyLoad({
  children,
  fallback = null,
  rootMargin = '50px',
  threshold = 0.1
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasLoaded) {
          setIsVisible(true)
          setHasLoaded(true)
        }
      },
      {
        rootMargin,
        threshold
      }
    )

    const element = document.getElementById('lazy-load-trigger')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [hasLoaded, rootMargin, threshold])

  return (
    <>
      <div id="lazy-load-trigger" className="absolute" />
      {isVisible ? children : fallback}
    </>
  )
}