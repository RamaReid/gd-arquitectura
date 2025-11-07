'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Header from '@/components/Header'
import LoaderPlano from '@/components/LoaderPlano'

export default function ClientShell({ children }: { children?: React.ReactNode }) {
  const [showHeader, setShowHeader] = useState(false)
  const [isLoadingComplete, setIsLoadingComplete] = useState(false)
  const pathname = usePathname()

  const handleHeaderShow = () => {
    setShowHeader(true)
    setTimeout(() => {
      setIsLoadingComplete(true)
    }, 800)
  }

  const handleLoadingComplete = () => {
    // placeholder si lo necesitas
  }

  return (
    <>
      <LoaderPlano 
        onHeaderShow={handleHeaderShow}
        onLoadingComplete={handleLoadingComplete}
      />

      {/* Fondo principal que aparece inmediatamente - animado desde framer-motion (cliente) */}
      <motion.div
        className="fixed inset-0 z-[1]"
        style={{
          backgroundImage: `url('/images/background2.png')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <Header isVisible={showHeader} />

      <main className="relative z-[2]">
        <div data-loading-complete={isLoadingComplete}>
          {children}
        </div>
      </main>
    </>
  )
}
