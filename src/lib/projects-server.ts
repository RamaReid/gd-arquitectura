import 'server-only'
import fs from 'fs'
import path from 'path'
import { projectsData, type ProjectData, type ProjectImage } from './projects'

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