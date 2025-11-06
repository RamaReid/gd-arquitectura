'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projectsData, type ProjectImage } from '@/lib/projects'
import OptimizedImage from '@/components/OptimizedImage'

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)
  const [images, setImages] = useState<ProjectImage[]>([])

  const project = projectsData[projectId as keyof typeof projectsData]

  // Inicializar imágenes del proyecto
  useEffect(() => {
    if (project) {
      setImages(project.images)
    }
  }, [project])

  // Navegación por teclado
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedImage) return

      switch (e.key) {
        case 'ArrowLeft':
          if (selectedIndex > 0) {
            const newIndex = selectedIndex - 1
            setSelectedIndex(newIndex)
            setSelectedImage(images[newIndex])
          }
          break
        case 'ArrowRight':
          if (selectedIndex < images.length - 1) {
            const newIndex = selectedIndex + 1
            setSelectedIndex(newIndex)
            setSelectedImage(images[newIndex])
          }
          break
        case 'Escape':
          setSelectedImage(null)
          break
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, selectedIndex, images])

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-gd-gray mb-4">Proyecto no encontrado</h1>
          <Link href="/proyectos" className="text-gd-red hover:text-gd-red/80">
            ← Volver a proyectos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header del proyecto */}
      <motion.section
        className="py-16 md:py-24"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <Link href="/proyectos" className="text-gd-red hover:text-gd-red/80 mb-8 inline-block">
            ← Volver a proyectos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-gd-gray mb-4">
                {project.title}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gd-gray/70 mb-6">
                <span>{project.location}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <p className="text-lg text-gd-gray/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <OptimizedImage
                src={project.image || images[0]?.src || '/images/placeholder.jpg'}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Galería */}
      <section className="py-16 bg-gd-warm/30">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-gd-gray">
              Galería del Proyecto
            </h2>
            <div className="text-gd-gray/70 text-sm">
              {images.length} {images.length === 1 ? 'archivo' : 'archivos'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  setSelectedImage(image)
                  setSelectedIndex(index)
                }}
              >
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  {image.isVideo ? (
                    <video
                      src={image.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <OptimizedImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {image.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gd-gray ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tooltip con información */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded whitespace-nowrap z-10">
                  {image.isVideo ? 'Video' : 'Imagen'} {index + 1}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full flex items-center">
            {/* Botón anterior */}
            {selectedIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  const newIndex = selectedIndex - 1
                  setSelectedIndex(newIndex)
                  setSelectedImage(images[newIndex])
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                ‹
              </button>
            )}

            {/* Contenido principal */}
            <div className="relative">
              {selectedImage.isVideo ? (
                <video
                  src={selectedImage.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[80vh] object-contain"
                />
              ) : (
                <OptimizedImage
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                  sizes="100vw"
                />
              )}
            </div>

            {/* Botón siguiente */}
            {selectedIndex < images.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  const newIndex = selectedIndex + 1
                  setSelectedIndex(newIndex)
                  setSelectedImage(images[newIndex])
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                ›
              </button>
            )}

            {/* Botón cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>

            {/* Indicador de progreso */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedIndex(index)
                    setSelectedImage(images[index])
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === selectedIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>

            {/* Contador */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}