'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import GDLogo from './GDLogo'

interface HeroCarouselProps {
  className?: string
}

const slides = [
  {
    id: 1,
    image: '/images/projects/gadehause-hero.jpg'
  },
  {
    id: 2,
    image: '/images/projects/magahause-hero.jpg'
  },
  {
    id: 3,
    image: '/images/projects/vidahause-hero.jpg'
  },
  {
    id: 4,
    image: '/images/projects/JOMAHAUSE-hero.jpg'
  },
  {
    id: 5,
    image: '/images/projects/MARKHAUSE-hero.jpg'
  },
  {
    id: 6,
    image: '/images/projects/USAHAUSE-hero.jpg'
  }
]

export default function HeroCarousel({ className = '' }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isRevealed, setIsRevealed] = useState(false)

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  // Start hero reveal when loading is complete
  useEffect(() => {
    // Detectar cuando el elemento padre tiene el atributo de loading complete
    const checkLoadingComplete = () => {
      const parentElement = document.querySelector('[data-loading-complete="true"]')
      if (parentElement && !isRevealed) {
        console.log('Loading complete detected, revealing hero carousel in 0.5s')
        // Agregar un pequeño delay para suavizar la transición
        setTimeout(() => {
          setIsRevealed(true)
        }, 500)
      }
    }

    // Verificar inmediatamente
    checkLoadingComplete()

    // Verificar cada 100ms hasta que se revele
    const interval = setInterval(() => {
      if (!isRevealed) {
        checkLoadingComplete()
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [isRevealed])

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection
      if (nextIndex >= slides.length) return 0
      if (nextIndex < 0) return slides.length - 1
      return nextIndex
    })
  }

  return (
    <motion.section 
      className={`relative overflow-hidden bg-gd-warm ${className} z-[3]`}
      style={{ height: '120vh' }}
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      animate={isRevealed ? { 
        opacity: 1, 
        scale: 1,
        y: 0,
        transition: { 
          duration: 1.8, 
          ease: [0.25, 0.1, 0.25, 1.0],
          delay: 0.1
        }
      } : { 
        opacity: 0, 
        scale: 0.98,
        y: 20
      }}
    >
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
            className="absolute inset-0"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slides[currentIndex].image}
                alt={`Proyecto arquitectónico ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`transition-all duration-500 ease-out cursor-pencil ${
                index === currentIndex 
                  ? 'w-6 h-2 bg-white/90 rounded-full shadow-lg' 
                  : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/70 hover:scale-125'
              }`}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
            />
          ))}
        </div>
      </div>

    </motion.section>
  )
}