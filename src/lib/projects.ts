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
    images: [
      { src: '/images/projects/CEDAHAUSE/cedahause-1.jpg', alt: 'Cedahause - Vista principal' },
      { src: '/images/projects/CEDAHAUSE/cedahause-2.jpg', alt: 'Cedahause - Interior' },
      { src: '/images/projects/CEDAHAUSE/cedahause-3.jpg', alt: 'Cedahause - Terraza' }
    ]
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
    images: [
      { src: '/images/projects/GADEHAUSE/gadehause-1.jpg', alt: 'Gadehause - Fachada' },
      { src: '/images/projects/GADEHAUSE/gadehause-2.jpg', alt: 'Gadehause - Living' },
      { src: '/images/projects/GADEHAUSE/gadehause-3.jpg', alt: 'Gadehause - Cocina' }
    ]
  },
  magahause: {
    id: 'magahause',
    title: 'Magahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/magahause-hero.jpg',
    description: 'Diseño residencial elegante con atención al detalle y confort moderno.',
    category: 'Residencial Elegante',
    features: ['Minimalista', 'Terraza', 'Multimedia'],
    images: [
      { src: '/images/projects/MAGAHAUSE/magahause-1.jpg', alt: 'Magahause - Vista frontal' },
      { src: '/images/projects/MAGAHAUSE/magahause-2.jpg', alt: 'Magahause - Sala de estar' },
      { src: '/images/projects/MAGAHAUSE/magahause-3.jpg', alt: 'Magahause - Dormitorio principal' }
    ]
  },
  jomahause: {
    id: 'jomahause',
    title: 'Jomahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/jomahause-hero.jpg',
    description: 'Proyecto residencial con enfoque en sostenibilidad y diseño bioclimático.',
    category: 'Residencial Sostenible',
    features: ['Bioclimático', 'Terraza', 'Energía solar'],
    images: [
      { src: '/images/projects/JOMAHAUSE/jomahause-1.jpg', alt: 'Jomahause - Diseño sostenible' },
      { src: '/images/projects/JOMAHAUSE/jomahause-2.jpg', alt: 'Jomahause - Terraza verde' },
      { src: '/images/projects/JOMAHAUSE/jomahause-3.jpg', alt: 'Jomahause - Interior natural' }
    ]
  },
  markhause: {
    id: 'markhause',
    title: 'Markhause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/markhause-hero.jpg',
    description: 'Casa moderna con espacios amplios y diseño industrial contemporáneo.',
    category: 'Residencial Industrial',
    features: ['Industrial', 'Loft', 'Minimalista'],
    images: [
      { src: '/images/projects/MARKHAUSE/markhause-1.jpg', alt: 'Markhause - Estilo industrial' },
      { src: '/images/projects/MARKHAUSE/markhause-2.jpg', alt: 'Markhause - Espacios abiertos' },
      { src: '/images/projects/MARKHAUSE/markhause-3.jpg', alt: 'Markhause - Detalles modernos' }
    ]
  },
  usahause: {
    id: 'usahause',
    title: 'Usahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/usahause-hero.jpg',
    description: 'Proyecto residencial con diseño mediterráneo y acabados premium.',
    category: 'Residencial Mediterráneo',
    features: ['Mediterráneo', 'Patio', 'Premium'],
    images: [
      { src: '/images/projects/USAHAUSE/usahause-1.jpg', alt: 'Usahause - Estilo mediterráneo' },
      { src: '/images/projects/USAHAUSE/usahause-2.jpg', alt: 'Usahause - Jardín interior' },
      { src: '/images/projects/USAHAUSE/usahause-3.jpg', alt: 'Usahause - Acabados premium' }
    ]
  },
  vidahause: {
    id: 'vidahause',
    title: 'Vidahause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/vidahause-hero.jpg',
    description: 'Casa con diseño orgánico que se integra perfectamente con el entorno natural.',
    category: 'Residencial Orgánico',
    features: ['Orgánico', 'Naturaleza', 'Integración'],
    images: [
      { src: '/images/projects/VIDAHAUSE/vidahause-1.jpg', alt: 'Vidahause - Integración natural' },
      { src: '/images/projects/VIDAHAUSE/vidahause-2.jpg', alt: 'Vidahause - Diseño orgánico' },
      { src: '/images/projects/VIDAHAUSE/vidahause-3.jpg', alt: 'Vidahause - Ventanas amplias' }
    ]
  }
}

export function getAllProjects(): ProjectData[] {
  return Object.values(projectsData)
}