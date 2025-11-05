'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface LogoAnimatedProps {
  width?: number
  height?: number
  className?: string
  maxLoops?: number
  onComplete?: () => void
}

export default function LogoAnimated({ 
  width = 210, 
  height = 170, 
  className = '',
  maxLoops = 2,
  onComplete
}: LogoAnimatedProps) {
  const [showCompleteLogo, setShowCompleteLogo] = useState(true)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    // Ocultar logo completo después de 1 segundo
    const hideLogoTimer = setTimeout(() => {
      setShowCompleteLogo(false)
    }, 1000)

    // Iniciar primera animación inmediatamente después de ocultar (1 segundo)
    const startAnimationTimer = setTimeout(() => {
      setAnimationKey(1)
    }, 1000)

    // Loop limitado cada 5.5 segundos después del primer ciclo
    const loopInterval = setInterval(() => {
      setAnimationKey(prev => {
        const nextKey = prev + 1
        // Si hemos completado todos los loops, llamar onComplete después de esta animación
        if (nextKey === maxLoops) {
          if (onComplete) {
            setTimeout(onComplete, 5500) // Esperar que termine la última animación
          }
        }
        // Si excedemos el máximo, limpiar interval y no incrementar más
        if (nextKey > maxLoops) {
          clearInterval(loopInterval)
          return prev
        }
        return nextKey
      })
    }, 5500)

    return () => {
      clearTimeout(hideLogoTimer)
      clearTimeout(startAnimationTimer)
      clearInterval(loopInterval)
    }
  }, [maxLoops, onComplete])

  return (
    <div className={className}>
      {/* LOGO COMPLETO INICIAL - Solo visible el primer segundo */}
      {showCompleteLogo && (
        <motion.svg 
          width={width} 
          height={height} 
          viewBox="0 0 210 170"
          style={{ 
            overflow: 'visible',
            filter: 'drop-shadow(1px 1px 2px rgba(255,255,255,0.8)) drop-shadow(-1px -1px 2px rgba(255,255,255,0.8))',
            transform: 'scale(1.2)'
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0 }}
        >
          {/* DATOS EXACTOS DEL SVG ORIGINAL */}
          
          {/* Capa 1: Línea horizontal punteada */}
          <line 
            x1="9.0716" 
            y1="85.2402" 
            x2="204.1578" 
            y2="85.2402" 
            stroke="black" 
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 3 1 3"
            fill="none"
          />
          
          {/* Capa 2: Línea vertical punteada */}
          <line 
            x1="106.6195" 
            y1="15.5714" 
            x2="106.6195" 
            y2="154.9187" 
            stroke="black" 
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 3 1 3"
            fill="none"
          />
          
          {/* Capa 3: Marco negro - DATOS EXACTOS DEL SVG ORIGINAL */}
          <line 
            x1="22.3182" 
            y1="51.9211" 
            x2="185.0042" 
            y2="51.9211" 
            stroke="black" 
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line 
            x1="173.3234" 
            y1="36.2735" 
            x2="173.778" 
            y2="134.9636" 
            stroke="black" 
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line 
            x1="40.4825" 
            y1="30.2342" 
            x2="40.4825" 
            y2="137.8011" 
            stroke="black" 
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <line 
            x1="185.0042" 
            y1="118.5687" 
            x2="22.3182" 
            y2="118.5687" 
            stroke="black" 
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Capa 4: Trazos de fondo grises - DATOS EXACTOS */}
          <path 
            d="M40.2984 91.3929l-24.5814 -24.5814m24.739 16.8603l-20.4766 -20.4767m21.2644 13.8587l-13.4553 -13.4554m14.7903 6.6471l-19.4185 -19.154m22.7901 13.4333l-19.6266 -19.2516m24.0593 15.393l-16.1737 -16.174m20.284 12.3788l-24.2662 -24.2662m28.029 21.4377l-20.5351 -20.535m25.4782 18.2299l-18.6113 -18.6114m27.0674 18.8737l-24.7692 -24.7694m32.4902 24.6118l-17.1474 -17.1475m24.8685 17.4627l-24.8965 -24.8965m32.6177 24.7388l-30.4333 -30.4334m38.548 30.1971l-20.8176 -20.8178m23.9743 16.4346l-21.1986 -22.3254m21.2069 13.3015l-10.1705 -10.1706m10.6916 4.1006l-11.125 -11.125m10.5904 112.855l-15.7602 -15.7602m9.8488 17.7272l-18.4335 -18.4332m-7.2483 0.1575l31.3568 31.3569m-39.3064 -32.1251l21.4234 22.1206m-69.6592 -61.4654l58.0721 58.072m3 10.2484l-57.6968 -57.6967m40.844 47.4351l-35.4694 -35.4691m4.0871 11.9924l24.4343 24.4343m-26.4029 -17.7365l19.2316 19.2314m58.2132 -113.3956l-8.0492 -8.0492" 
            stroke="#6E6E6E" 
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Capa 5: Trazo interior G (rojo) - DATOS EXACTOS */}
          <polyline 
            points="106.6195,82.9488 104.2629,80.3041 106.6195,85.245 101.6786,80.3041 106.6195,87.4096 99.541,80.3041 106.6195,89.7911 97.1325,80.3041 104.4452,90.0939 94.9097,80.3041 102.3762,90.0939 92.5865,80.3041 100.2251,90.0939 90.4141,80.3041 97.8299,90.0939 88.0403,80.3041 95.3396,90.0939 85.9997,80.3041 93.284,90.0939 83.4942,80.3041 90.9876,90.0939 81.3534,80.3041 88.7379,90.0939 78.9481,80.3041 86.4567,90.0939 76.7517,80.3041 84.1918,90.0939 74.4018,80.3041 83.2476,91.2387 73.0841,81.1464 83.2476,93.696 73.084,83.5326 83.2476,95.7476 73.0841,85.6456 82.0756,96.9055 73.0841,88.0787 79.7167,96.9592 73.0841,90.0939 77.4185,96.9592 73.0841,92.6248 75.1865,96.9592 73.084,94.8639 73.7147,96.9592" 
            stroke="#FF0009" 
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Capa 6: Trazo exterior G (rojo) - DATOS EXACTOS */}
          <path 
            d="M55.1067 114.5553l15.9655 15.8777 -10.3657 -14.9084 14.5875 14.9402 -8.3474 -12.8934 12.9635 12.9193 -7.6697 -12.1716 12.1902 12.1902 -7.7936 -12.3396 12.3397 12.3396 -7.644 -12.1902 12.1902 12.1902 -7.6441 -12.1902 12.1901 12.1902 -7.7934 -12.3397 12.3395 12.3395 -7.7934 -12.3395 11.673 11.673 -6.9775 -11.5234 6.9774 6.9773 -2.4313 -6.9774 2.4314 2.4312m0.0083 -81.762l-5.8022 -5.802 5.7939 10.2798 -7.9219 -8.1888 7.9219 12.7349 -12.1828 -12.419 12.2885 17.3717 -16.048 -16.557 10.336 15.0903 -14.5139 -14.7504 9.9679 14.7504 -13.8837 -14.1987 9.3376 14.1987 -13.3322 -13.3322 8.786 13.3322 -13.3281 -13.3322 8.782 13.3322 -13.1882 -13.1881 8.642 13.1881 -12.6847 -12.6846 8.1386 12.6846 -11.8866 -11.8866 7.3405 11.8866 -10.8377 -10.8375 7.2147 11.7608 -10.4912 -10.4913 6.9937 11.5399 -10.0717 -10.0718 6.8737 11.4199 -9.7688 -9.7687 6.9236 11.3233 -9.6468 -9.5005 6.8591 11.4052 -9.4183 -9.4181 6.9461 11.4922 -9.3456 -9.3456 7.0924 11.6385 -9.3344 -9.3345 7.3006 11.8469 -9.3847 -9.3847 7.5779 12.1239 -9.5008 -9.5008 7.936 12.4823 -9.6922 -9.6924 8.3954 12.9416 -9.976 -9.976 8.9873 13.5336 -10.3793 -10.3794 9.6104 14.1566 -10.7959 -10.7961 10.817 15.3632 -11.7714 -11.7713 12.3486 16.8946 -13.0365 -13.0365 18.1694 22.1865 -18.5404 -18.0114 23.489 27.1108 -23.4657 -22.5412 38.4752 43.0213 -37.9152 -37.9151 31.9672 36.5131 -30.5652 -30.5651 23.4369 27.9829 -20.2772 -20.277" 
            stroke="#FF0009" 
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Capa 7: Trazo D (azul) - DATOS EXACTOS */}
          <path 
            d="M108.2842 119.0335l-2.2381 -2.9343 5.8936 3.0836 -5.6208 -6.6608 11.0576 6.5115 -11.0576 -11.0577 15.7532 11.207 -15.7532 -15.7531 20.2993 15.7531 -20.2993 -20.2993 24.6961 20.15 -24.8465 -24.8465 29.542 24.9958 -29.2693 -29.2692 33.2134 28.6672 -28.6744 -28.6742 33.3777 28.8314 -28.8387 -28.8386 32.684 28.1379 -28.1448 -28.145 31.6337 27.0877 -27.0947 -27.0948 30.2656 25.7195 -25.7266 -25.7265 28.6077 24.0615 -24.0687 -24.0687 26.6804 22.1342 -22.1413 -22.1413 24.4975 19.9515 -23.0574 -23.0575 25.1664 20.6202 -25.1664 -25.1664 27.0306 22.4846 -52.3113 -52.3114 53.9277 49.3815 -49.3839 -49.3837 50.7416 46.1954 -46.1988 -46.1988 47.278 42.7317 -42.736 -42.736 43.5009 38.9549 -38.9596 -38.9596 39.3497 34.8036 -34.8088 -34.8088 34.7115 30.1653 -30.1683 -30.1684 29.3408 24.7946 -24.1128 -24.1126 21.7898 17.2437 -15.197 -15.197m-43.0371 25.1548l-4.0927 -4.5901 8.6317 4.5831 -8.6317 -8.6318 13.1707 8.6246 -13.1707 -13.1707 17.7098 13.1636 -17.7935 -17.7934 22.3325 17.7864 -22.2488 -22.2489 26.7878 22.2418 -26.7878 -26.788 31.327 26.7808 -27.8181 -27.8179 29.8268 25.2807" 
            stroke="#34369E" 
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.svg>
      )}

      {/* ANIMACIÓN CON DATOS EXACTOS DEL SVG ORIGINAL */}
      {!showCompleteLogo && animationKey <= maxLoops && (
        <svg 
          key={animationKey}
          width={width} 
          height={height} 
          viewBox="0 0 210 170"
          style={{ 
            overflow: 'visible',
            filter: 'drop-shadow(1px 1px 2px rgba(255,255,255,0.8)) drop-shadow(-1px -1px 2px rgba(255,255,255,0.8))',
            transform: 'scale(1.2)'
          }}
        >
          {/* CAPA 1: Línea horizontal punteada */}
          <motion.line 
            x1="9.0716" y1="85.2402" x2="204.1578" y2="85.2402"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 3 1 3"
            fill="none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0, delay: 0, ease: "easeOut" }}
          />

          {/* CAPA 2: Línea vertical punteada */}
          <motion.line 
            x1="106.6195" y1="15.5714" x2="106.6195" y2="154.9187"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5 3 1 3"
            fill="none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0, delay: 0, ease: "easeOut" }}
          />

          {/* MÁSCARAS: Líneas que tapan las punteadas - CON COLOR DE FONDO CORRECTO */}
          <motion.line 
            x1="9.0716" y1="85.2402" x2="204.1578" y2="85.2402"
            stroke="#F6EFB9"
            strokeWidth="1.5"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="none"
            strokeDasharray="195.09"
            shapeRendering="crispEdges"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -195.09 }}
            transition={{ duration: 0.8, delay: 0, ease: "easeInOut", fill: "forwards" }}
          />

          <motion.line 
            x1="106.6195" y1="15.5714" x2="106.6195" y2="154.9187"
            stroke="#F6EFB9"
            strokeWidth="1.5"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            fill="none"
            strokeDasharray="139.35"
            shapeRendering="crispEdges"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -139.35 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut", fill: "forwards" }}
          />

          {/* CAPA 3: Marco negro - TRAZADO CON STROKEDASHARRAY */}
          <motion.line 
            x1="22.3182" y1="51.9211" x2="185.0042" y2="51.9211"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="162.69"
            initial={{ strokeDashoffset: 162.69 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeInOut" }}
          />

          <motion.line 
            x1="173.3234" y1="36.2735" x2="173.778" y2="134.9636"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="98.69"
            initial={{ strokeDashoffset: 98.69 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.6, delay: 2, ease: "easeInOut" }}
          />

          <motion.line 
            x1="40.4825" y1="30.2342" x2="40.4825" y2="137.8011"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="107.57"
            initial={{ strokeDashoffset: 107.57 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.6, delay: 2.6, ease: "easeInOut" }}
          />

          <motion.line 
            x1="185.0042" y1="118.5687" x2="22.3182" y2="118.5687"
            stroke="black"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="162.69"
            initial={{ strokeDashoffset: 162.69 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 0.7, delay: 3.2, ease: "easeInOut" }}
          />

          {/* CAPA 4: Trazos grises de fondo - APARECEN CON TRAZADO */}
          <motion.path 
            d="M40.2984 91.3929l-24.5814 -24.5814m24.739 16.8603l-20.4766 -20.4767m21.2644 13.8587l-13.4553 -13.4554m14.7903 6.6471l-19.4185 -19.154m22.7901 13.4333l-19.6266 -19.2516m24.0593 15.393l-16.1737 -16.174m20.284 12.3788l-24.2662 -24.2662m28.029 21.4377l-20.5351 -20.535m25.4782 18.2299l-18.6113 -18.6114m27.0674 18.8737l-24.7692 -24.7694m32.4902 24.6118l-17.1474 -17.1475m24.8685 17.4627l-24.8965 -24.8965m32.6177 24.7388l-30.4333 -30.4334m38.548 30.1971l-20.8176 -20.8178m23.9743 16.4346l-21.1986 -22.3254m21.2069 13.3015l-10.1705 -10.1706m10.6916 4.1006l-11.125 -11.125m10.5904 112.855l-15.7602 -15.7602m9.8488 17.7272l-18.4335 -18.4332m-7.2483 0.1575l31.3568 31.3569m-39.3064 -32.1251l21.4234 22.1206m-69.6592 -61.4654l58.0721 58.072m3 10.2484l-57.6968 -57.6967m40.844 47.4351l-35.4694 -35.4691m4.0871 11.9924l24.4343 24.4343m-26.4029 -17.7365l19.2316 19.2314m58.2132 -113.3956l-8.0492 -8.0492"
            stroke="#6E6E6E"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="800"
            initial={{ strokeDashoffset: 800 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          />

          {/* CAPA 5: Letra G interior (roja) - TRAZADO PROGRESIVO */}
          <motion.polyline 
            points="106.6195,82.9488 104.2629,80.3041 106.6195,85.245 101.6786,80.3041 106.6195,87.4096 99.541,80.3041 106.6195,89.7911 97.1325,80.3041 104.4452,90.0939 94.9097,80.3041 102.3762,90.0939 92.5865,80.3041 100.2251,90.0939 90.4141,80.3041 97.8299,90.0939 88.0403,80.3041 95.3396,90.0939 85.9997,80.3041 93.284,90.0939 83.4942,80.3041 90.9876,90.0939 81.3534,80.3041 88.7379,90.0939 78.9481,80.3041 86.4567,90.0939 76.7517,80.3041 84.1918,90.0939 74.4018,80.3041 83.2476,91.2387 73.0841,81.1464 83.2476,93.696 73.084,83.5326 83.2476,95.7476 73.0841,85.6456 82.0756,96.9055 73.0841,88.0787 79.7167,96.9592 73.0841,90.0939 77.4185,96.9592 73.0841,92.6248 75.1865,96.9592 73.084,94.8639 73.7147,96.9592"
            stroke="#FF0009"
            strokeWidth="0.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="1500"
            initial={{ strokeDashoffset: 1500 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1, delay: 2, ease: "easeInOut" }}
          />

          {/* CAPA 6: Letra G exterior (roja) - TRAZADO PROGRESIVO */}
          <motion.path 
            d="M55.1067 114.5553l15.9655 15.8777 -10.3657 -14.9084 14.5875 14.9402 -8.3474 -12.8934 12.9635 12.9193 -7.6697 -12.1716 12.1902 12.1902 -7.7936 -12.3396 12.3397 12.3396 -7.644 -12.1902 12.1902 12.1902 -7.6441 -12.1902 12.1901 12.1902 -7.7934 -12.3397 12.3395 12.3395 -7.7934 -12.3395 11.673 11.673 -6.9775 -11.5234 6.9774 6.9773 -2.4313 -6.9774 2.4314 2.4312m0.0083 -81.762l-5.8022 -5.802 5.7939 10.2798 -7.9219 -8.1888 7.9219 12.7349 -12.1828 -12.419 12.2885 17.3717 -16.048 -16.557 10.336 15.0903 -14.5139 -14.7504 9.9679 14.7504 -13.8837 -14.1987 9.3376 14.1987 -13.3322 -13.3322 8.786 13.3322 -13.3281 -13.3322 8.782 13.3322 -13.1882 -13.1881 8.642 13.1881 -12.6847 -12.6846 8.1386 12.6846 -11.8866 -11.8866 7.3405 11.8866 -10.8377 -10.8375 7.2147 11.7608 -10.4912 -10.4913 6.9937 11.5399 -10.0717 -10.0718 6.8737 11.4199 -9.7688 -9.7687 6.9236 11.3233 -9.6468 -9.5005 6.8591 11.4052 -9.4183 -9.4181 6.9461 11.4922 -9.3456 -9.3456 7.0924 11.6385 -9.3344 -9.3345 7.3006 11.8469 -9.3847 -9.3847 7.5779 12.1239 -9.5008 -9.5008 7.936 12.4823 -9.6922 -9.6924 8.3954 12.9416 -9.976 -9.976 8.9873 13.5336 -10.3793 -10.3794 9.6104 14.1566 -10.7959 -10.7961 10.817 15.3632 -11.7714 -11.7713 12.3486 16.8946 -13.0365 -13.0365 18.1694 22.1865 -18.5404 -18.0114 23.489 27.1108 -23.4657 -22.5412 38.4752 43.0213 -37.9152 -37.9151 31.9672 36.5131 -30.5652 -30.5651 23.4369 27.9829 -20.2772 -20.277"
            stroke="#FF0009"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="3000"
            initial={{ strokeDashoffset: 3000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.2, delay: 2.5, ease: "easeInOut" }}
          />

          {/* CAPA 7: Letra D (azul) - TRAZADO PROGRESIVO */}
          <motion.path 
            d="M108.2842 119.0335l-2.2381 -2.9343 5.8936 3.0836 -5.6208 -6.6608 11.0576 6.5115 -11.0576 -11.0577 15.7532 11.207 -15.7532 -15.7531 20.2993 15.7531 -20.2993 -20.2993 24.6961 20.15 -24.8465 -24.8465 29.542 24.9958 -29.2693 -29.2692 33.2134 28.6672 -28.6744 -28.6742 33.3777 28.8314 -28.8387 -28.8386 32.684 28.1379 -28.1448 -28.145 31.6337 27.0877 -27.0947 -27.0948 30.2656 25.7195 -25.7266 -25.7265 28.6077 24.0615 -24.0687 -24.0687 26.6804 22.1342 -22.1413 -22.1413 24.4975 19.9515 -23.0574 -23.0575 25.1664 20.6202 -25.1664 -25.1664 27.0306 22.4846 -52.3113 -52.3114 53.9277 49.3815 -49.3839 -49.3837 50.7416 46.1954 -46.1988 -46.1988 47.278 42.7317 -42.736 -42.736 43.5009 38.9549 -38.9596 -38.9596 39.3497 34.8036 -34.8088 -34.8088 34.7115 30.1653 -30.1683 -30.1684 29.3408 24.7946 -24.1128 -24.1126 21.7898 17.2437 -15.197 -15.197m-43.0371 25.1548l-4.0927 -4.5901 8.6317 4.5831 -8.6317 -8.6318 13.1707 8.6246 -13.1707 -13.1707 17.7098 13.1636 -17.7935 -17.7934 22.3325 17.7864 -22.2488 -22.2489 26.7878 22.2418 -26.7878 -26.788 31.327 26.7808 -27.8181 -27.8179 29.8268 25.2807"
            stroke="#34369E"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            strokeDasharray="4000"
            initial={{ strokeDashoffset: 4000 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 1.5, delay: 3, ease: "easeInOut" }}
          />
        </svg>
      )}
    </div>
  )
}