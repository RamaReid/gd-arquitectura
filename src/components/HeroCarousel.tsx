'use client'

import { useState } from 'react'
import OptimizedImage from './OptimizedImage'

export default function HeroCarousel({ className = '' }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = [
    {
      image: '/images/projects/gadehause-hero.jpg',
      title: 'Gadehause'
    },
    {
      image: '/images/projects/magahause-hero.jpg',
      title: 'Magahause'
    },
    {
      image: '/images/projects/vidahause-hero.jpg',
      title: 'Vidahause'
    },
    {
      image: '/images/projects/JOMAHAUSE-hero.jpg',
      title: 'Jomahause'
    },
    {
      image: '/images/projects/MARKHAUSE-hero.jpg',
      title: 'Markhause'
    },
    {
      image: '/images/projects/USAHAUSE-hero.jpg',
      title: 'Usahause'
    },
    {
      image: '/images/projects/CEDAHAUSE-hero.png',
      title: 'Cedahause'
    }
  ]

  return (
    <section
      className={`relative overflow-hidden bg-gd-warm ${className}`}
      style={{ height: '120vh' }}
    >
      {/* Simple Image Display */}
      <div className="relative w-full h-full">
        <OptimizedImage
          src={slides[currentIndex].image}
          alt={`Proyecto arquitectónico ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}