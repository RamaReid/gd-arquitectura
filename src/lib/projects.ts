import fs from 'fs'
import path from 'path'

export interface ProjectImage {
  src: string
  alt: string
  isVideo?: boolean
}

export interface ProjectData {
  id: string
  title: string
  location: string
  year: string
  image: string
  description: string
  category: string
  features: string[]
  images: ProjectImage[]
}

export const projectsData: Record<string, ProjectData> = {
  cedahause: {
    id: 'cedahause',
    title: 'Cedahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/CEDAHAUSE-hero.png',
    description: 'Proyecto residencial con diseño innovador y funcionalidad avanzada.',
    category: 'Residencial Moderno',
    features: ['Terraza', 'Multimedia', 'Minimalista'],
    images: []
  },
  gadehause: {
    id: 'gadehause',
    title: 'Gadehause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/gadehause-hero.jpg',
    description: 'Casa familiar con diseño contemporáneo y espacios integrados.',
    category: 'Residencial Familiar',
    features: ['Patio', 'Terraza', 'Pileta'],
    images: []
  },
  magahause: {
    id: 'magahause',
    title: 'Magahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/magahause-hero.jpg',
    description: 'Vivienda de dos plantas con terraza y quincho integrado.',
    category: 'Residencial Moderno',
    features: ['Terraza', 'Quincho', 'Dos plantas'],
    images: []
  },
  jomahause: {
    id: 'jomahause',
    title: 'Jomahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/JOMAHAUSE-hero.jpg',
    description: 'Residencia familiar con diseño minimalista y amplios ventanales.',
    category: 'Residencial Minimalista',
    features: ['Ventanales amplios', 'Minimalista', 'Luminoso'],
    images: []
  },
  markhause: {
    id: 'markhause',
    title: 'Markhause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/MARKHAUSE-hero.jpg',
    description: 'Casa de estilo contemporáneo con elementos naturales integrados.',
    category: 'Residencial Contemporáneo',
    features: ['Elementos naturales', 'Contemporáneo', 'Integración'],
    images: []
  },
  usahause: {
    id: 'usahause',
    title: 'Usahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/USAHAUSE-hero.jpg',
    description: 'Vivienda moderna con enfoque en la eficiencia energética.',
    category: 'Residencial Sustentable',
    features: ['Eficiencia energética', 'Sustentable', 'Moderno'],
    images: []
  },
  vidahause: {
    id: 'vidahause',
    title: 'Vidahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/vidahause-hero.jpg',
    description: 'Proyecto residencial con enfoque en sustentabilidad.',
    category: 'Residencial Sustentable',
    features: ['Sustentable', 'Ecológico', 'Moderno'],
    images: []
  }
}

export function getProjectImages(projectId: string): ProjectImage[] {
  try {
    const projectPath = path.join(process.cwd(), 'public', 'images', 'projects', projectId.toUpperCase())

    if (!fs.existsSync(projectPath)) {
      return []
    }

    const files = fs.readdirSync(projectPath)
    const images: ProjectImage[] = []

    files.forEach(file => {
      const ext = path.extname(file).toLowerCase()
      const isVideo = ['.mp4', '.mov', '.avi', '.webm'].includes(ext)
      const isImage = ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext)

      if (isImage || isVideo) {
        images.push({
          src: `/images/projects/${projectId.toUpperCase()}/${file}`,
          alt: `${projectsData[projectId]?.title || projectId} - ${file}`,
          isVideo
        })
      }
    })

    // Ordenar: primero imágenes, luego videos
    return images.sort((a, b) => {
      if (a.isVideo && !b.isVideo) return 1
      if (!a.isVideo && b.isVideo) return -1
      return a.src.localeCompare(b.src)
    })
  } catch (error) {
    console.error(`Error loading images for project ${projectId}:`, error)
    return []
  }
}

export function getAllProjects(): ProjectData[] {
  return Object.values(projectsData).map(project => ({
    ...project,
    images: getProjectImages(project.id)
  }))
}