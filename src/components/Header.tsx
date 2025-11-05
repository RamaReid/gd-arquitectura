'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import GDLogo from './GDLogo'

// Usamos el logo real de GD
// El componente GDLogo ya maneja toda la animación

// Componente del Header Principal
export default function Header({ isVisible = false }: { isVisible?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Detectar scroll para cambiar fondo del header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Estudio', href: '/estudio' },
    { name: 'Contacto', href: '/contacto' }
  ]

  return (
    <>
      {/* Header fijo - Con fondo semitransparente para contraste */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-[999] overflow-hidden"
        style={{
          background: 'rgba(250, 248, 245, 0.45)',
          backdropFilter: 'blur(1px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
        }}
        initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }}
        animate={{ 
          clipPath: isVisible 
            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
            : 'polygon(0 0, 0 0, 0 100%, 0 100%)' 
        }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-12 lg:px-20 xl:px-24">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo y título a la izquierda */}
            <div className="flex items-center space-x-6 lg:space-x-8">
              {/* Solo el logo tiene vínculo */}
              <Link href="/" className="cursor-pencil">
                <motion.div
                  whileHover={{ scale: 1.20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <GDLogo width={82} height={67} autoPlay={false} />
                </motion.div>
              </Link>
              
              {/* Texto separado, sin vínculo */}
              <motion.div 
                className="hidden md:block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="font-serif text-xl lg:text-2xl text-black">
                  Arquitectura, Diseño y Construcción
                </span>
              </motion.div>
            </div>

            {/* Navegación Desktop */}
            <motion.nav 
              className="hidden md:flex items-center space-x-5 lg:space-x-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              {navItems.map((item, index) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`
                      nav-link font-serif font-medium text-lg lg:text-xl transition-all duration-200 cursor-pencil
                      hover:scale-110 relative focus:outline-none
                      ${pathname === item.href 
                        ? 'text-gd-red active' 
                        : 'text-black hover:text-gd-blue'
                      }
                    `}
                    style={{ 
                      display: 'inline-block',
                      transformOrigin: 'center'
                    }}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </motion.nav>

            {/* Botón hamburguesa - Mobile */}
            <motion.button
              className="md:hidden p-2 cursor-pencil focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center"
                animate={isMobileMenuOpen ? "open" : "closed"}
              >
                <motion.span
                  className="block w-6 h-0.5 bg-black mb-1"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-black mb-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-black"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[1001]"
              style={{
                background: `linear-gradient(rgba(250, 248, 245, 0.98), rgba(250, 248, 245, 0.98)), url('/images/background.png')`,
                backgroundSize: 'cover'
              }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-8 pt-24">
                <nav className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`
                          nav-link-mobile block text-2xl font-serif cursor-pencil transition-all duration-200
                          hover:scale-110 relative focus:outline-none
                          ${pathname === item.href 
                            ? 'text-gd-red active' 
                            : 'text-black hover:text-gd-blue'
                          }
                        `}
                        style={{ 
                          transformOrigin: 'left center'
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Estilos para cursor personalizado y subrayado progresivo */}
      <style jsx global>{`
        .cursor-pencil {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="%23000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>'), auto;
        }
        
        .cursor-pencil:active {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="%23333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><path d="m21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c2.04 0 3.93.68 5.44 1.83"/></svg>'), auto;
        }

        /* Eliminar outline y focus styles por defecto */
        *:focus {
          outline: none !important;
          box-shadow: none !important;
        }

        /* Eliminar estilos de selección por defecto */
        *:focus-visible {
          outline: none !important;
        }

        /* Subrayado progresivo para navegación */
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #FF0009;
          transition: width 0.3s ease-in-out;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link.active::after {
          width: 100%;
        }

        /* Subrayado progresivo para menú móvil */
        .nav-link-mobile::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #FF0009;
          transition: width 0.3s ease-in-out;
        }

        .nav-link-mobile:hover::after {
          width: 100%;
        }

        .nav-link-mobile.active::after {
          width: 100%;
        }
      `}</style>
    </>
  )
}