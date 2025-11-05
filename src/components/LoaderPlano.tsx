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
  const [logoHeartbeat, setLogoHeartbeat] = useState(false)
  const [showLoader, setShowLoader] = useState(true)
  const [loaderFading, setLoaderFading] = useState(false)

  const handleLogoComplete = () => {
    // Cuando termine el segundo loop:
    // 1. Ocultar logo del centro
    setShowCenterLogo(false)
    // 2. Mostrar logo pequeño
    setShowSmallLogo(true)
    
    // 3. Después de 0.5s, iniciar el latido
    setTimeout(() => {
      setLogoHeartbeat(true)
    }, 500)
    
    // 4. Después del latido (1.5s total), activar header y ocultar logo pequeño
    setTimeout(() => {
      setShowSmallLogo(false) // Ocultar logo pequeño
      if (onHeaderShow) {
        onHeaderShow()
      }
      if (onLoadingComplete) {
        onLoadingComplete()
      }
    }, 1500)

    // 5. Después de que aparezca el header (2.5s total), iniciar fade-out del loader
    setTimeout(() => {
      setLoaderFading(true)
    }, 2500)

    // 6. Después del fade-out (3.5s total), ocultar completamente el loader
    setTimeout(() => {
      setShowLoader(false)
    }, 3500)
  }

  return (
    <div>
      {/* Fondo estático - solo mostrar si showLoader es true */}
      {showLoader && (
        <motion.div
          className={`fixed inset-0 z-[998] ${className}`}
          style={{
            backgroundImage: `url('/images/background2.png')`,
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'saturate(0.6) blur(0.75px)'
          }}
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: loaderFading ? 0 : 1 
          }}
          transition={{ 
            duration: 1,
            ease: "easeInOut"
          }}
        />
      )}

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

      {/* Logo pequeño - aparece cuando termina la animación - SOLO EL LOGO CON FONDO */}
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
                {/* Estructura igual al header real - con Link y motion.div - SIN FONDO */}
                <div className="cursor-pencil">
                  <motion.div
                    animate={logoHeartbeat ? {
                      scale: [1, 1.2, 1],
                    } : {}}
                    transition={{
                      duration: 1,
                      ease: [0.25, 0.1, 0.25, 1.0],
                      times: [0, 0.5, 1]
                    }}
                  >
                    <GDLogo 
                      width={82} 
                      height={67} 
                      className=""
                      autoPlay={false}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}