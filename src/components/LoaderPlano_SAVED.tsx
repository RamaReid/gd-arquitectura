'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LogoAnimated from './LogoAnimated'
import GDLogo from './GDLogo'

interface LoaderPlanoProps {
  className?: string
  onHeaderShow?: () => void
  onLoadingComplete?: () => void
}

export default function LoaderPlano({ className = '', onHeaderShow, onLoadingComplete }: LoaderPlanoProps) {
  const [showCenterLogo, setShowCenterLogo] = useState(true)
  const [showSmallLogo, setShowSmallLogo] = useState(false)

  const handleLogoComplete = () => {
    // Cuando termine el segundo loop:
    // 1. Ocultar logo del centro
    setShowCenterLogo(false)
    // 2. Mostrar logo pequeño
    setShowSmallLogo(true)
  }

  return (
    <div>
      {/* Fondo estático */}
      <div
        className={`fixed inset-0 z-[998] ${className}`}
        style={{
          backgroundImage: `url('/images/background2.png')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'saturate(0.6) blur(0.75px)'
        }}
      />

      {/* Logo animado del centro - 2 loops - desaparece cuando termina */}
      {showCenterLogo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center pointer-events-none">
          <LogoAnimated 
            width={280} 
            height={220} 
            className=""
            maxLoops={2}
            onComplete={handleLogoComplete}
          />
        </div>
      )}

      {/* Logo pequeño - aparece cuando termina la animación */}
      {showSmallLogo && (
        <motion.div 
          className="fixed top-0 left-0 right-0 z-[1000] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="container mx-auto px-12 lg:px-20 xl:px-24">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <GDLogo 
                  width={82} 
                  height={67} 
                  className=""
                  autoPlay={false}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}