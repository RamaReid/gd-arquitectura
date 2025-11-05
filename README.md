# GD Arquitectura - Sitio Web Profesional

Sitio web moderno para **García Delillo Arquitectura, Diseño y Construcción** - Un estudio especializado en proyectos residenciales de alta calidad.

## ✨ Características

- **Framework**: Next.js 15 con TypeScript
- **Styling**: Tailwind CSS con diseño editorial inspirado en revistas Living
- **Animaciones**: Framer Motion para transiciones suaves y efectos elegantes  
- **Optimización**: Imágenes optimizadas con Next/Image
- **Responsive**: Diseño completamente adaptativo
- **Performance**: Turbopack para desarrollo rápido

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   ├── HeroSunrise.tsx     # Hero section con efecto amanecer
│   ├── ProjectGrid.tsx     # Galería de proyectos
│   ├── QuoteBlock.tsx      # Bloque de citas editoriales
│   └── FooterEditorial.tsx # Footer minimalista
└── public/
    └── images/             # Imágenes del sitio
```

## 🎨 Diseño Visual

### Paleta de Colores
- **Cálido**: `#FAF8F5` (fondo principal)
- **Gris**: `#6E6E6E` (texto)
- **Rojo**: `#FF0009` (acentos G)
- **Azul**: `#34369E` (acentos D)

### Tipografía
- **Serif**: Crimson Text (títulos y citas)
- **Sans**: Inter (texto general)

### Inspiraciones
- **Ark-Shelter**: Minimalismo elegante
- **Catalyst Architects**: Claridad visual
- **MAde Studio**: Identidad coherente
- **Living Magazine**: Estética editorial

## 🚀 Configuración de Desarrollo

### Requisitos Previos
- Node.js 18+
- npm/yarn/pnpm

### Instalación
```bash
# Clonar el repositorio
git clone [repository-url]
cd gd-arquitectura

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev        # Desarrollo con Turbopack
npm run build      # Build de producción  
npm run start      # Servidor de producción
npm run lint       # Verificar código
npm run type-check # Verificar tipos TypeScript
```

## 📁 Gestión de Contenido

### Proyectos
Los proyectos se configuran en `src/components/ProjectGrid.tsx`:

```typescript
const projects = [
  {
    id: 'gadehause',
    title: 'Gadehause',
    location: 'Residencial',
    year: '2024',
    image: '/images/projects/gadehause-hero.jpg',
    description: 'Casa familiar con diseño contemporáneo...'
  }
]
```

### Imágenes
- Colocar imágenes en `public/images/`
- Usar formato WebP/AVIF para mejor performance
- Optimización automática con Next/Image

## 🎯 Componentes Principales

### HeroSunrise
Hero section con animación tipo "amanecer"
```tsx
<HeroSunrise 
  title="GD Arquitectura"
  subtitle="Diseño y Construcción"
  image="/hero.jpg"
/>
```

### ProjectGrid  
Galería responsiva de proyectos con hover effects

### QuoteBlock
Bloque de citas estilo editorial
```tsx
<QuoteBlock 
  quote="Cada proyecto es una oportunidad..."
  author="García Delillo"
/>
```

## 🛠️ Tecnologías

- **Next.js 15**: React framework
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Utility-first CSS
- **Framer Motion**: Animaciones
- **ESLint**: Linting
- **PostCSS**: Procesamiento CSS

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm, md, lg, xl
- **Touch Friendly**: Interacciones optimizadas para touch

## 🔧 Personalización

### Colores
Editar `tailwind.config.ts` para modificar la paleta:

```typescript
colors: {
  'gd-warm': '#FAF8F5',
  'gd-gray': '#6E6E6E',
  // ...
}
```

### Animaciones
Personalizar en `globals.css` y componentes con Framer Motion

## 📈 Performance

- **Core Web Vitals**: Optimizado para LCP, FID, CLS
- **Image Optimization**: Automática con Next/Image
- **Code Splitting**: Automático con Next.js
- **Turbopack**: Build tool ultra-rápido

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Conectar con Vercel
npx vercel

# Deploy automático en push a main
```

### Otros Providers
- Netlify
- Railway
- Docker

## 📞 Soporte

Para consultas sobre el desarrollo o personalización del sitio:
- Documentación técnica en `/docs`
- Issues en GitHub
- Email: desarrollo@gdarquitectura.com

---

**GD Arquitectura** - Espacios que inspiran vida ✨