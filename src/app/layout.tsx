'use client'

import { Inter, Crimson_Text } from 'next/font/google'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import LoaderPlano from '@/components/LoaderPlano'
import './globals.css'
import '../styles/turnjs.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const crimsonText = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-crimson',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [showHeader, setShowHeader] = useState(false)
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  const pathname = usePathname()

  const handleHeaderShow = () => {
    setShowHeader(true)
    // Después de un breve delay para que termine la animación del header
    setTimeout(() => {
      setIsLoadingComplete(true)
    }, 800) // Tiempo para que termine de aparecer el header
  }

  const handleLoadingComplete = () => {
    // Ya no se usa aquí, el timing se maneja en handleHeaderShow
  }

  return (
    <html lang="es" className={`${inter.variable} ${crimsonText.variable}`}>
      <head>
        <title>GD Arquitectura - Diseño y Construcción</title>
        <meta name="description" content="Estudio de arquitectura especializado en diseño residencial y construcción de alta calidad." />
        <meta name="keywords" content="arquitectura, diseño, construcción, residencial, estudio" />
      </head>
      <body 
        className={inter.className}
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <LoaderPlano 
          onHeaderShow={handleHeaderShow}
          onLoadingComplete={handleLoadingComplete} 
        />
        
        {/* Fondo principal que aparece después del loader - EN TODAS LAS PÁGINAS */}
        {isLoadingComplete && (
          <motion.div
            className="fixed inset-0 z-[1]"
            style={{
              backgroundImage: `url('/images/background2.png')`,
              backgroundSize: 'cover',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'saturate(0.6) blur(0.75px)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        )}
        
        <Header isVisible={showHeader} />
        <main className="relative z-[2]">
          <div data-loading-complete={isLoadingComplete}>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}