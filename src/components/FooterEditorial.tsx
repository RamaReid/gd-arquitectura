export default function FooterEditorial() {
  return (
    <footer className="py-12 border-t border-gd-gray/10">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="mx-auto">
            <h3 className="font-serif text-2xl text-black mb-2">
              GD Arquitectura
            </h3>
            <p className="text-black">
              Diseño y Construcción
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-black">
            <p>García Delillo</p>
            <p>Estudio de Arquitectura</p>
            <p>contacto@gdarquitectura.com</p>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gd-gray/10">
            <p className="text-sm text-black">
              © 2024 GD Arquitectura. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}