# ☀️ GD Arquitectura — Sitio Web Narrativo  
**Inspirado en el lenguaje visual y editorial de Revista Living (La Nación).**

---

## 🎯 Objetivo
Crear una experiencia web cálida, editorial y emocional, que transmita la trayectoria y sensibilidad de **GD Arquitectura, Diseño y Construcción**.  
No se busca un portfolio técnico, sino una **revista digital viva**, donde cada proyecto se lea como una historia de habitar.

---

## 🧱 1. Concepto general
- **Referencia visual:** estructura y ritmo de *Revista Living*.
- **Tono:** luminoso, contemplativo, humano.
- **Eje narrativo:** *Here Comes the Sun* (The Beatles) → ritmo progresivo y sereno.
- **Modo de lectura:** scroll vertical pausado, equivalente al hojear una revista.

---

## 🪞 2. Estructura del sitio
| Sección | Propósito | Elementos principales |
|----------|------------|-----------------------|
| **Home / Luz inicial** | Introducir identidad y atmósfera. | Hero visual, título principal, microtexto, bloques introductorios. |
| **Proyectos** | Mostrar obras como historias visuales, no fichas técnicas. | Galería + vista individual con ritmo Living. |
| **Historia** | Transmitir herencia y continuidad familiar. | Línea de tiempo 1900–1970–Hoy. |
| **Proceso** | Mostrar la filosofía del trabajo GD. | 4 etapas: Escuchar, Proyectar, Construir, Habitar. |
| **Contacto** | Invitar sin formalidad. | Frase emocional + formulario minimalista. |

---

## 🎨 3. Identidad visual
| Elemento | Especificación |
|-----------|----------------|
| **Fondo** | Blanco cálido `#FAF8F5` |
| **Texto principal** | Gris oscuro `#1A1A1A` |
| **Acento** | Terracota `#C76B39` |
| **Tipografía** | Serif: *Playfair Display* — títulos <br> Sans-serif: *Inter* — cuerpo |
| **Ancho máximo contenedor** | 1280px |
| **Espaciado vertical entre secciones** | 96px (desktop) / 64px (mobile) |
| **Transiciones** | `opacity + translateY(24px)` · 300–400 ms · `ease-out` |
| **Altura de imágenes principales** | `min(70vh, 900px)` |
| **Ancho máximo de texto** | `65ch` |
| **Máximo texto por bloque** | 120 palabras (≈ 650 caracteres) |
| **Relación texto : imagen** | 1 bloque de texto → 2 imágenes grandes |
| **Ratios fotográficos** | `16:9`, `3:2`, `4:5` |

---

## 🏠 4. Home – Luz inicial
**Estructura:**
1. Hero visual (foto luminosa, ratio 16:9).  
2. H1: “Más de cien años construyendo lugares donde la vida sucede.”  
3. Texto breve (≤ 50 palabras).  
4. Tres bloques introductorios tipo revista:  
   - “Casas que respiran”  
   - “Luz y materia”  
   - “Arquitectura y paisaje”  
5. Cita final: *“La arquitectura no se explica: se respira.”*

---

## 🏗️ 5. Proyectos
### 🧩 Vista general
- Grid 2 columnas (desktop) / 1 columna (mobile).  
- Cada tarjeta:  
  - Imagen (`aspect 4/3`)  
  - Título ≤ 50 caracteres  
  - Frase corta (≤ 100 caracteres)  
  - Hover → aumento leve de luminosidad  

### 🖼️ Vista individual (modelo Living)
1. Imagen hero (full width, `min 70vh`).  
2. Título + bajada corta.  
3. Bloque de texto 1 (≤ 120 palabras).  
4. Imagen grande (3:2).  
5. Bloque de texto 2 (≤ 100 palabras).  
6. Galería triple (3 imágenes 4:5).  
7. Pausa sensorial → imagen full width (64–72 vh).  
8. Texto final (≤ 80 palabras).  
9. Imagen cierre (detalle humano o luz).  
10. Datos mínimos: Ubicación · Año · Superficie · Equipo.

---

## 🕰️ 6. Historia
**Formato:** timeline visual 3 bloques horizontales (desktop) / vertical (mobile).

| Año | Contenido |
|-----|------------|
| **1900 – Pedro García / Lincoln** | Imagen B&N · texto ≤ 80 palabras |
| **1970 – Juan Carlos García Delillo / Tandil** | Imagen sepia · texto ≤ 80 palabras |
| **Hoy – GD Arquitectura** | Imagen color cálido · texto ≤ 100 palabras |

Cita central (serif grande): *“La arquitectura cambia, pero el oficio permanece.”*

---

## 🧰 7. Proceso
Grid 4 columnas (desktop) / vertical (mobile).  
Cada columna = imagen (1:1) + texto ≤ 50 palabras.

| Paso | Texto |
|------|--------|
| **Escuchar** | “Escuchamos historias antes de dibujar planos.” |
| **Proyectar** | “Diseñamos con claridad y luz, pensando en la vida cotidiana.” |
| **Construir** | “Transformamos ideas en materia, con precisión artesanal.” |
| **Habitar** | “Celebramos la vida en los espacios que creamos.” |

---

## ✉️ 8. Contacto
| Elemento | Descripción |
|-----------|-------------|
| **Frase principal** | “Contanos cómo te imaginás tu lugar.” |
| **Formulario** | Nombre · Email · Mensaje · Botón “Enviar” |
| **Imagen lateral** | Detalle arquitectónico (ratio 3:4) |
| **Paleta** | Fondo blanco cálido, texto gris medio #444, acento terracota leve |
| **Footer** | “GD Arquitectura — Diseño y Construcción familiar desde 1900.” + Redes sociales |

---

## 🧩 9. Componentes sugeridos
- `<HeroImage />`
- `<ImageText />`
- `<GalleryTriple />`
- `<QuoteBlock />`
- `<Timeline />`
- `<ProcessSteps />`
- `<ContactForm />`

Cada componente debe aceptar props definidas (ver contrato original).

---

## 📐 10. Wireframe de referencia
![Wireframe de GD Arquitectura](./docs/assets/wireframe-living.png)

---

## 💡 11. Consideraciones narrativas
- Lenguaje: emocional y descriptivo, nunca técnico.  
- Frases cortas, evocativas (“Luz, aire y materia se cruzan en equilibrio”).  
- Cada scroll = una “página” de revista.  
- Priorizar la **respiración visual**: márgenes amplios, texto breve, luz natural.  
- Meta final: que el usuario *sienta* la calma y la confianza que transmite GD.

---

## ⚙️ 12. Framework sugerido
- **Next.js** o **Astro** (render estático y animaciones suaves).  
- **Framer Motion** para transiciones.  
- **Tailwind CSS** para tipografía y grid.  
- **Imágenes WebP** optimizadas.  
- **SEO:** arquitectura residencial, diseño + construcción, Tandil / Buenos Aires.

---

## 📁 13. Estructura de carpetas recomendada
```
/README.md
/docs/
 └─ assets/
     ├─ wireframe-living.png
     ├─ logo-gd.svg
     ├─ paleta.png
     └─ portada-living.jpg
/src/
 ├─ components/
 ├─ pages/
 └─ styles/
```

---

**© 2025 GD Arquitectura, Diseño y Construcción**  
*Desarrollo visual basado en la estética de Revista Living.*
