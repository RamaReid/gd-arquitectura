'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    proyecto: '',
    mensaje: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-gd-gray mb-6">
            Contacto
          </h1>
          <p className="text-xl text-gd-gray/80 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Nos encantaría conocer tus ideas y 
            ayudarte a convertirlas en realidad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulario */}
          <motion.div 
            className="bg-white/90 p-8 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl text-gd-gray mb-6">
              Cuéntanos sobre tu proyecto
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gd-gray font-medium mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    className="w-full px-4 py-3 border border-gd-gray/20 rounded-lg focus:border-gd-blue focus:outline-none transition-colors cursor-pencil"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gd-gray font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gd-gray/20 rounded-lg focus:border-gd-blue focus:outline-none transition-colors cursor-pencil"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gd-gray font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    className="w-full px-4 py-3 border border-gd-gray/20 rounded-lg focus:border-gd-blue focus:outline-none transition-colors cursor-pencil"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gd-gray font-medium mb-2">
                    Tipo de Proyecto
                  </label>
                  <select
                    name="proyecto"
                    className="w-full px-4 py-3 border border-gd-gray/20 rounded-lg focus:border-gd-blue focus:outline-none transition-colors cursor-pencil"
                    value={formData.proyecto}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="casa">Casa Familiar</option>
                    <option value="departamento">Departamento</option>
                    <option value="oficina">Oficina</option>
                    <option value="comercial">Local Comercial</option>
                    <option value="remodelacion">Remodelación</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gd-gray font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gd-gray/20 rounded-lg focus:border-gd-blue focus:outline-none transition-colors resize-none cursor-pencil"
                  placeholder="Cuéntanos sobre tu proyecto, ubicación, presupuesto estimado y cualquier idea que tengas..."
                  value={formData.mensaje}
                  onChange={handleChange}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gd-red hover:bg-gd-blue text-white font-medium py-4 px-6 rounded-lg transition-colors duration-300 cursor-pencil"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Datos de Contacto */}
            <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="font-serif text-2xl text-gd-gray mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-gd-red text-xl">📧</span>
                  <div>
                    <h4 className="font-medium text-gd-gray">Email</h4>
                    <p className="text-gd-gray/80">contacto@gdarquitectura.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-gd-blue text-xl">📱</span>
                  <div>
                    <h4 className="font-medium text-gd-gray">Teléfono</h4>
                    <p className="text-gd-gray/80">+54 9 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-gd-gray text-xl">📍</span>
                  <div>
                    <h4 className="font-medium text-gd-gray">Ubicación</h4>
                    <p className="text-gd-gray/80">Buenos Aires, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-green-600 text-xl">🕒</span>
                  <div>
                    <h4 className="font-medium text-gd-gray">Horarios</h4>
                    <p className="text-gd-gray/80">Lun - Vie: 9:00 - 18:00</p>
                    <p className="text-gd-gray/80">Sáb: 9:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white/90 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="font-serif text-2xl text-gd-gray mb-6">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gd-gray mb-2">
                    ¿Cuánto tiempo toma un proyecto?
                  </h4>
                  <p className="text-sm text-gd-gray/80">
                    Depende de la complejidad, pero típicamente 3-6 meses desde el diseño hasta la construcción.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gd-gray mb-2">
                    ¿Trabajan fuera de Buenos Aires?
                  </h4>
                  <p className="text-sm text-gd-gray/80">
                    Sí, consideramos proyectos en toda Argentina según la ubicación y alcance.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gd-gray mb-2">
                    ¿Ofrecen consultas iniciales?
                  </h4>
                  <p className="text-sm text-gd-gray/80">
                    La primera consulta es gratuita para conocer tu proyecto y evaluar viabilidad.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}