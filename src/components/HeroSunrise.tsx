'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroSunriseProps {
  image?: string
  title?: string
  subtitle?: string
  height?: string
  overlay?: boolean
}

export default function HeroSunrise({
  image = '/images/hero-default.jpg',
  title,
  subtitle,
  height = '100vh',
  overlay = true
}: HeroSunriseProps) {
  return (
    <motion.section 
      className={`relative overflow-hidden bg-gd-warm`}
      style={{ height }}
      initial={{ opacity: 0, filter: 'brightness(0.8)' }}
      animate={{ opacity: 1, filter: 'brightness(1)' }}
      transition={{ duration: 2.5, ease: 'easeOut' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="GD Arquitectura Hero"
          fill
          className="object-cover"
          priority
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div 
          className="text-center text-white max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {title && (
            <h1 className="mb-6 font-serif text-4xl md:text-6xl lg:text-8xl font-light tracking-wide drop-shadow-lg">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xl md:text-2xl lg:text-3xl font-serif font-light tracking-wider opacity-95 drop-shadow-md">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}