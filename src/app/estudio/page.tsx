export default function EstudioPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Hero del Estudio */}
        <div className="text-center mb-20">
          <h1 className="font-serif text-4xl md:text-5xl text-gd-gray mb-6">
            GD Arquitectura
          </h1>
          <p className="text-2xl font-serif text-gd-gray/80 mb-8 italic">
            "Espacios que inspiran vida"
          </p>
          <p className="text-xl text-gd-gray/80 max-w-4xl mx-auto leading-relaxed">
            Somos un estudio de arquitectura dedicado a crear espacios únicos que reflejan 
            la personalidad y necesidades de cada cliente. Nuestro enfoque combina diseño 
            contemporáneo con funcionalidad práctica.
          </p>
        </div>

        {/* Filosofía */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="font-serif text-3xl text-gd-red mb-6">Nuestra Filosofía</h2>
            <p className="text-gd-gray/80 leading-relaxed mb-4">
              Creemos que cada proyecto arquitectónico debe ser una respuesta sensible al contexto, 
              las necesidades del usuario y el medio ambiente. Nuestro trabajo se basa en tres pilares fundamentales:
            </p>
            <ul className="space-y-3 text-gd-gray/80">
              <li className="flex items-start">
                <span className="text-gd-red mr-2">•</span>
                <span><strong>Funcionalidad:</strong> Espacios que responden a la vida cotidiana</span>
              </li>
              <li className="flex items-start">
                <span className="text-gd-blue mr-2">•</span>
                <span><strong>Sustentabilidad:</strong> Diseño consciente del impacto ambiental</span>
              </li>
              <li className="flex items-start">
                <span className="text-gd-gray mr-2">•</span>
                <span><strong>Belleza:</strong> Estética que trasciende tendencias</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="font-serif text-3xl text-gd-blue mb-6">Nuestro Proceso</h2>
            <p className="text-gd-gray/80 leading-relaxed mb-4">
              Trabajamos de manera colaborativa con nuestros clientes, desde la conceptualización 
              inicial hasta la entrega final del proyecto.
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-gd-red pl-4">
                <h4 className="font-medium text-gd-gray">1. Escucha Activa</h4>
                <p className="text-sm text-gd-gray/70">Entendemos tus necesidades y sueños</p>
              </div>
              <div className="border-l-2 border-gd-blue pl-4">
                <h4 className="font-medium text-gd-gray">2. Diseño Colaborativo</h4>
                <p className="text-sm text-gd-gray/70">Desarrollamos propuestas juntos</p>
              </div>
              <div className="border-l-2 border-gd-gray pl-4">
                <h4 className="font-medium text-gd-gray">3. Acompañamiento Total</h4>
                <p className="text-sm text-gd-gray/70">Te guiamos hasta la entrega final</p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipo */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-gd-gray mb-8">Nuestro Equipo</h2>
          <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl text-gd-gray mb-4">García Delillo</h3>
            <p className="text-gd-gray/80 leading-relaxed mb-4">
              Arquitecto graduado con más de una década de experiencia en proyectos residenciales 
              y comerciales. Especializado en diseño sustentable y arquitectura bioclimática.
            </p>
            <p className="text-gd-gray/80 leading-relaxed">
              "Mi objetivo es crear espacios que no solo sean hermosos, sino que mejoren 
              la calidad de vida de quienes los habitan."
            </p>
          </div>
        </div>

        {/* Servicios */}
        <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
          <h2 className="font-serif text-3xl text-gd-gray mb-8 text-center">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gd-red/10 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gd-red">🏗️</span>
              </div>
              <h4 className="font-medium text-gd-gray mb-2">Diseño Arquitectónico</h4>
              <p className="text-sm text-gd-gray/70">Proyectos residenciales y comerciales</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gd-blue/10 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gd-blue">📐</span>
              </div>
              <h4 className="font-medium text-gd-gray mb-2">Planificación</h4>
              <p className="text-sm text-gd-gray/70">Estudios de factibilidad y zonificación</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gd-gray/10 rounded-full flex items-center justify-center">
                <span className="text-2xl text-gd-gray">🔨</span>
              </div>
              <h4 className="font-medium text-gd-gray mb-2">Construcción</h4>
              <p className="text-sm text-gd-gray/70">Dirección y supervisión de obra</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-500/10 rounded-full flex items-center justify-center">
                <span className="text-2xl text-green-600">🌱</span>
              </div>
              <h4 className="font-medium text-gd-gray mb-2">Sustentabilidad</h4>
              <p className="text-sm text-gd-gray/70">Certificaciones y eficiencia energética</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}