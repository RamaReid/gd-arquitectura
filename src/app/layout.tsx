import { Inter, Crimson_Text } from 'next/font/google'
import './globals.css'
import '../styles/turnjs.css'
import ClientShell from '@/components/ClientShell'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const crimsonText = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-crimson',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Layout ahora es un Server Component: no usar hooks ni 'use client' aquí
  return (
    <html lang="es" className={`${inter.variable} ${crimsonText.variable}`}> 
      <head>
        <title>GD Arquitectura - Diseño y Construcción</title>
        <meta name="description" content="Estudio de arquitectura especializado en diseño residencial y construcción de alta calidad." />
        <meta name="keywords" content="arquitectura, diseño, construcción, residencial, estudio" />
      </head>
      <body 
        className={inter.className}
        style={{
          backgroundImage: `url('/images/background.png')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* ClientShell contiene LoaderPlano, Header y el manejo de animaciones/estado (es un componente cliente) */}
        <ClientShell>
          {children}
        </ClientShell>
      </body>
    </html>
  )
}