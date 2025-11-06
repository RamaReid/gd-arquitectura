import HeroCarousel from '@/components/HeroCarousel'
import ProjectGrid from '@/components/ProjectGrid'
import QuoteBlock from '@/components/QuoteBlock'
import FooterEditorial from '@/components/FooterEditorial'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel - Pantalla completa */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* Resto de secciones - SIN FONDO para mostrar el fondo arquitectónico */}
      <div className="relative">
        <QuoteBlock
          quote="Cada proyecto es una oportunidad de crear espacios que inspiren y conecten con la vida cotidiana."
          author="García Delillo"
        />

        <ProjectGrid />

        <FooterEditorial />
      </div>
    </div>
  )
}