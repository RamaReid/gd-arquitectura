'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface Project {
  id: string
  title: string
  location: string
  year: string
  image: string
  description: string
}

const projects: Project[] = [
  {
    id: 'gadehause',
    title: 'Gadehause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/gadehause-hero.jpg',
    description: 'Casa familiar con diseño contemporáneo y espacios integrados.'
  },
  {
    id: 'magahause',
    title: 'Magahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/magahause-hero.jpg',
    description: 'Vivienda de dos plantas con terraza y quincho integrado.'
  },
  {
    id: 'vidahause',
    title: 'Vidahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/vidahause-hero.jpg',
    description: 'Proyecto residencial con enfoque en sustentabilidad.'
  },
  {
    id: 'jomahause',
    title: 'Jomahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/JOMAHAUSE-hero.jpg',
    description: 'Residencia familiar con diseño minimalista y amplios ventanales.'
  },
  {
    id: 'markhause',
    title: 'Markhause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/MARKHAUSE-hero.jpg',
    description: 'Casa de estilo contemporáneo con elementos naturales integrados.'
  },
  {
    id: 'usahause',
    title: 'Usahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/USAHAUSE-hero.jpg',
    description: 'Vivienda moderna con enfoque en la eficiencia energética.'
  }
]

export default function ProjectGrid() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="mb-12 text-center font-serif text-3xl md:text-4xl lg:text-5xl text-gd-gray"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Proyectos
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-serif text-xl md:text-2xl text-gd-gray">
                  {project.title}
                </h3>
                <div className="flex justify-between text-sm text-gd-gray/70">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
                <p className="text-gd-gray/80 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}