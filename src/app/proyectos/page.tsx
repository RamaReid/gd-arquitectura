import ProjectGrid from '@/components/ProjectGrid'

export default function ProyectosPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-black mb-4">
            Nuestros Proyectos
          </h1>
          <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
            Cada proyecto es una respuesta única a las necesidades y sueños de nuestros clientes, 
            creando espacios que trascienden lo funcional para convertirse en lugares que inspiran vida.
          </p>
        </div>
        
        <ProjectGrid />
        
        {/* Sección adicional de proyectos */}
        <div className="mt-20 text-center">
          <h2 className="font-serif text-3xl text-black mb-8">
            Proceso de Diseño
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-serif text-xl text-gd-red mb-3">Conceptualización</h3>
              <p className="text-black">
                Entendemos tus necesidades y desarrollamos el concepto arquitectónico.
              </p>
            </div>
            <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-serif text-xl text-gd-blue mb-3">Desarrollo</h3>
              <p className="text-black">
                Creamos planos detallados y visualizaciones 3D del proyecto.
              </p>
            </div>
            <div className="bg-white/90 p-6 rounded-lg backdrop-blur-sm">
              <h3 className="font-serif text-xl text-black mb-3">Construcción</h3>
              <p className="text-black">
                Supervisamos cada detalle hasta la entrega de tu nuevo espacio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}