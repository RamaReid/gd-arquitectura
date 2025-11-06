'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getAllProjects, type ProjectData } from '@/lib/projects'

export default function ProjectGrid() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [activeFilter, setActiveFilter] = useState<string>('Todos')

  useEffect(() => {
    const allProjects = getAllProjects()
    setProjects(allProjects)
  }, [])

  // Obtener categorías únicas
  const categories = ['Todos', ...Array.from(new Set(projects.map(p => p.category)))]

  // Filtrar proyectos
  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeFilter)

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
        
        {/* Filtros por categoría */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-gd-red text-white'
                  : 'bg-white/80 text-gd-gray hover:bg-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
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
              <Link href={`/proyectos/${project.id}`}>
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
                  <div className="flex justify-between text-sm text-gd-gray/70 mb-2">
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gd-warm/50 text-gd-gray text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <p className="text-gd-gray/80 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}