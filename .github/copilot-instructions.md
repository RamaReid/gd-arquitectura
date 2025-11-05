# GD Arquitectura - Workspace Instructions

Este workspace está configurado para el desarrollo del sitio web de **García Delillo Arquitectura, Diseño y Construcción**.

## Configuración del Proyecto

- **Framework**: Next.js 15 con TypeScript
- **Styling**: Tailwind CSS con diseño editorial
- **Animaciones**: Framer Motion
- **Optimización**: Turbopack, Next/Image

## Estructura de Componentes

### Componentes Principales
- `HeroSunrise`: Hero section con animación amanecer
- `ProjectGrid`: Galería de proyectos arquitectónicos  
- `QuoteBlock`: Citas editoriales estilo revista
- `FooterEditorial`: Footer minimalista

### Estilo Visual
- Inspirado en Living Magazine, Ark-Shelter, Catalyst Architects
- Paleta: cálidos (#FAF8F5), grises (#6E6E6E), rojo (#FF0009), azul (#34369E)
- Tipografía: Crimson Text (serif), Inter (sans)

## Scripts de Desarrollo

```bash
npm run dev        # Desarrollo con Turbopack
npm run build      # Build de producción
npm run lint       # Verificar código  
npm run type-check # Verificar tipos
```

## Gestión de Contenido

- Proyectos configurados en `ProjectGrid.tsx`
- Imágenes en `public/images/`
- Optimización automática de imágenes

## Performance y SEO

- Core Web Vitals optimizados
- Meta tags configurados
- Responsive design mobile-first