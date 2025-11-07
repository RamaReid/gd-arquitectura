'use client'

import { useState, useRef } from 'react'
import dynamic from 'next/dynamic'
import OptimizedImage from './OptimizedImage'

// Import dinámico para evitar problemas durante SSR
const HTMLFlipBook = dynamic(() => import('react-pageflip'), { ssr: false })

export default function HeroCarousel({ className = '' }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const flipBook = useRef<any>(null)

  const slides = [
    { image: '/images/projects/hero/gadehause-hero.jpg', title: 'Gadehause' },
    { image: '/images/projects/hero/magahause-hero.jpg', title: 'Magahause' },
    { image: '/images/projects/hero/vidahause-hero.jpg', title: 'Vidahause' },
    { image: '/images/projects/hero/jomahause-hero.jpg', title: 'Jomahause' },
    { image: '/images/projects/hero/markhause-hero.jpg', title: 'Markhause' },
    { image: '/images/projects/hero/usahause-hero.jpg', title: 'Usahause' },
    { image: '/images/projects/hero/cedahause-hero.png', title: 'Cedahause' },
    { image: '/images/projects/hero/ciane-hero.jpg', title: 'Cianehouse' },
    { image: '/images/projects/hero/scohause-hero.jpg', title: 'Scohause' }
  ]

  return (
    <section
      className={`relative overflow-hidden bg-gd-warm ${className}`}
      style={{ height: '120vh' }}
    >
      <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
        <HTMLFlipBook
          useMouseEvents={true}
          showPageCorners={true}
          width={900}
          height={600}
          minWidth={315}
          minHeight={420}
          maxWidth={1200}
          maxHeight={900}
          size="stretch"
          showCover={false}
          mobileScrollSupport={true}
          className="shadow-xl rounded-lg"
          ref={flipBook}
          style={{ background: 'transparent' }}
          onFlip={(e) => setCurrentIndex(e.data)}
          startPage={0}
          drawShadow={true}
          flippingTime={700}
          usePortrait={true}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          swipeDistance={50}
          clickEventForward={true}
          disableFlipByClick={false}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="flipbook-page relative w-full h-full">
              <OptimizedImage
                src={slide.image}
                alt={`Proyecto arquitectónico ${idx + 1}`}
                fill
                className="object-cover rounded-lg"
                priority={idx === 0}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              flipBook.current?.pageFlip()?.flip(index)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}