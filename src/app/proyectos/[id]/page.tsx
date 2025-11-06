'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { projectsData, getProjectImages, type ProjectImage } from '@/lib/projects'

export default function ProjectPage() {
  const params = useParams()
  const projectId = params.id as string
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null)
  const [images, setImages] = useState<ProjectImage[]>([])

  const project = projectsData[projectId as keyof typeof projectsData]

  useEffect(() => {
    // Cargar imágenes del proyecto dinámicamente
    const projectImages = getProjectImages(projectId)
    setImages(projectImages)
  }, [projectId])

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
              <Image
                src={project.image || images[0]?.src || '/images/placeholder.jpg'}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Galería */}
      <section className="py-16 bg-gd-warm/30">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-gd-gray mb-12 text-center">
            Galería del Proyecto
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(image)}
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
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para imagen ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            {selectedImage.isVideo ? (
              <video
                src={selectedImage.src}
                controls
                autoPlay
                className="max-w-full max-h-full"
              />
            ) : (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gd-gray hover:bg-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}