Construye una landing page de una sola página en Astro con DaisyUI, 
TailwindCSS y Astro-Icon (iconos lucide) para el negocio:

---

NEGOCIO: Centro de Salud Esencia Vital
TAGLINE SUGERIDO: "Tu bienestar, en manos que cuidan"

---

## PALETA DE COLORES (extraída del logo)
- Verde lima vibrante: #8DC63F (color dominante, fondo de secciones clave)
- Rojo coral/rosado: #E8415A
- Azul turquesa: #4BBFCB
- Gris oscuro: #4A4A4A (texto principal)
- Blanco: #FFFFFF

Usar estas como CSS custom properties en :root. El verde lima es el alma 
de la marca; debe dominar sin agobiar.

---

## TIPOGRAFÍA
- Display/headings: "Playfair Display" (Google Fonts) — evoca bienestar, 
  naturaleza y calidez
- Body: "Nunito" (Google Fonts) — amigable, legible, costarricense en 
  espíritu
- Importar ambas desde Google Fonts en el <head>

---

## TONO DE COPY
Cálido + profesional. Tuteo natural. Lenguaje costarricense sin jerga 
excesiva. Transmite confianza y cercanía a la vez. Invita, no presiona.

---

## SECCIONES (en orden)

### 1. HERO
- Logo del negocio (placeholder: /images/logo.png)
- Headline impactante usando Playfair Display
- Subtítulo breve con propuesta de valor
- CTA principal: botón "Escribinos por WhatsApp" → 
  https://wa.me/50687736281
- Fondo: verde lima con textura sutil (noise CSS o SVG orgánico). 
  Elementos decorativos: espiral o bambú inspirados en el logo (SVG inline)

### 2. SOBRE NOSOTROS
- Párrafo cálido de 2-3 oraciones explicando la misión del centro
- Pequeñas tarjetas/badges con valores: "Natural", "Integral", 
  "Con amor", "Artesanal"
- Fondo blanco o gris muy claro

### 3. SERVICIOS (cards en grid responsive)
Cada card debe tener: ícono lucide relevante, nombre del servicio, 
descripción breve (2 líneas), y opcionalmente un color de acento.

Servicios:
1. Macrobiótica — ícono: "leaf" — 
   "Alimentación consciente para equilibrar cuerpo y mente."
2. Terapia con Flores de Bach — ícono: "flower-2" — 
   "Remedios florales para el equilibrio emocional."
3. Masaje relajante y descontracturante — ícono: "hand" — 
   "Liberá la tensión y recuperá tu vitalidad."
4. Terapia Termo-masaje CERAGEM — ícono: "zap" — 
   "Tecnología japonesa de termoterapia para alivio profundo."
5. Pan de Masa Madre "Doña Levadura" — ícono: "wheat" — 
   "Pan artesanal con amor, fermentación natural y sabor de verdad."

Grid: 2 columnas en mobile, 3 en desktop. Cards con sombra suave, 
borde redondeado, hover con leve elevación (translate-y).

### 4. PRODUCTO DESTACADO — "Doña Levadura"
Sección especial con fondo verde lima o coral suave para el pan artesanal.
- Nombre "Doña Levadura" en grande con Playfair Display
- Descripción emotiva: proceso artesanal, masa madre, hecho con cariño
- Badge/chip: "Sin conservantes · Artesanal · Local"
- CTA: "Pedí tu pan" → WhatsApp

### 5. CONTACTO Y UBICACIÓN
- Título: "¿Dónde estamos?"
- Embed de Google Maps (iframe) o enlace:
  https://maps.app.goo.gl/nvq1jJzYSRcijg9g9
- Botón WhatsApp: https://wa.me/50687736281
- Iconos de redes sociales con links:
  - Facebook: https://www.facebook.com/profile.php?id=100063725523365
  - Instagram: https://www.instagram.com/macroesenciavital

### 6. FOOTER
- Logo pequeño
- Frase breve inspiracional
- Links a redes
- © 2025 Centro de Salud Esencia Vital

---

## DETALLES TÉCNICOS

Estructura de archivos Astro:
src/
  pages/
    index.astro       ← página principal
  components/
    Hero.astro
    Servicios.astro
    DonaLevadura.astro
    Contacto.astro
    Footer.astro
  layouts/
    Layout.astro      ← con <head>, fonts, meta tags SEO básico

- Usar componentes Astro separados por sección
- TailwindCSS para utilidades, DaisyUI para cards/buttons/badges
- Astro-Icon para todos los íconos (colección lucide)
- El botón de WhatsApp flotante (fixed, bottom-right) debe aparecer 
  en TODAS las secciones con ícono "message-circle" verde
- Animaciones: usar Tailwind transition/duration para hovers. 
  Para el hero, una entrada suave con @keyframes fadeInUp en CSS global
- Meta SEO: title, description, og:image básico
- Responsive mobile-first obligatorio

---

## RESTRICCIONES
- No usar imágenes de stock externas (solo placeholders locales)
- No usar frameworks JS pesados (solo Astro islands si es necesario)
- Todo el texto en español (Costa Rica)
- El código debe ser limpio, comentado por sección