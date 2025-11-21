# 🚀 Guía Rápida de Migración a v2.0

## ⚡ Inicio Rápido (5 minutos)

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Configurar Variables de Entorno
```bash
# Copiar el template
cp .env.example .env

# Editar .env con tus valores
# VITE_FORMSPREE_ID=tu_id_aqui
# PORT=3000
```

### 3. Configurar Analytics (Opcional)
Editar `index.html`:
- **Línea ~7**: Cambiar GTM ID si es necesario
  ```javascript
  'GTM-KWZCJ3H8' // ← Tu Google Tag Manager ID
  ```
  
- **Línea ~28**: Cambiar Hotjar ID
  ```javascript
  hjid:5242894 // ← Tu Hotjar Site ID
  ```

### 4. Build & Run
```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start
```

---

## 🌍 Usar Internacionalización

### Cambiar Idioma Manualmente
El sitio detecta automáticamente el idioma del navegador. Para cambiar:
1. Click en el botón **ES/EN** en la navegación
2. El cambio es instantáneo y se guarda en localStorage

### Agregar Más Idiomas
1. Crear `locales/fr/translation.json` (ejemplo francés)
2. Copiar estructura de `locales/es/translation.json`
3. Traducir todos los textos
4. Actualizar `i18n/config.ts`:
```typescript
supportedLngs: ['en', 'es', 'fr']
```

---

## 📊 Ver Analytics

### Google Tag Manager
1. Ir a [tagmanager.google.com](https://tagmanager.google.com)
2. Ver eventos en tiempo real
3. Configurar triggers y tags personalizados

### Hotjar
1. Ir a [hotjar.com](https://www.hotjar.com)
2. Ver heatmaps y grabaciones de sesión
3. Analizar comportamiento de usuarios

### Eventos Personalizados
Los eventos se envían automáticamente:
- ✅ Clics en proyectos
- ✅ Reproducciones de video
- ✅ Envíos de formulario
- ✅ Cambios de filtro
- ✅ Scroll depth (25%, 50%, 75%, 100%)
- ✅ Cambios de idioma

---

## 🖼️ Optimizar Imágenes

### Generar AVIF y WebP
```bash
# Instalar herramientas
npm install -g sharp-cli

# Convertir una imagen
sharp -i input.jpg -o output.avif -f avif
sharp -i input.jpg -o output.webp -f webp

# Batch conversion
for f in *.jpg; do
  sharp -i "$f" -o "${f%.jpg}.avif" -f avif
  sharp -i "$f" -o "${f%.jpg}.webp" -f webp
done
```

### Usar en Componentes
```tsx
import OptimizedImage from './components/OptimizedImage';

<OptimizedImage
  src="/images/photo.jpg"  // Automáticamente busca .avif y .webp
  alt="Descripción"
  loading="lazy"
/>
```

---

## 🎨 Agregar Animaciones

### Animar Elementos
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Tu contenido
</motion.div>
```

### Hover Effects
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### Scroll Animations
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  Aparece al hacer scroll
</motion.div>
```

---

## 📝 Personalizar Contenido

### Agregar Nuevo Video
Editar `constants.ts`:
```typescript
{
  id: 9,
  title: 'Nuevo Proyecto',
  description: 'Descripción...',
  thumbnailUrl: '/videos/nuevo-thumb.webp',
  videoUrl: '/videos/nuevo.webm',
  year: '2025',
  role: 'Director',
  tools: ['Premiere Pro'],
  category: 'Categoría',
}
```

### Traducir Nuevo Video
Editar `locales/es/translation.json` y `locales/en/translation.json` si necesitas traducciones especiales.

### Modificar Servicios
Editar `constants.ts` sección `SERVICES`:
```typescript
{
  title: 'Nuevo Servicio',
  description: 'Descripción del servicio',
  icon: '🎬'
}
```

---

## 🔧 Troubleshooting

### Build Falla
```bash
# Limpiar y reinstalar
rm -rf node_modules dist
npm install
npm run build
```

### i18n No Funciona
```bash
# Verificar que los archivos existan
ls locales/es/translation.json
ls locales/en/translation.json

# Verificar import en index.tsx
grep "i18n/config" index.tsx
```

### Analytics No Trackea
1. Verificar GTM ID en `index.html`
2. Abrir DevTools → Network → Filtrar por "gtm"
3. Verificar que se envíen requests

### Imágenes AVIF No Cargan
- El navegador debe soportar AVIF (Chrome 85+, Edge 90+)
- Fallback automático a WebP y luego JPG/PNG

---

## 📚 Recursos

### Documentación
- [React i18next](https://react.i18next.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Hotjar](https://help.hotjar.com/)
- [GTM](https://developers.google.com/tag-platform/tag-manager)

### Herramientas
- [AVIF Converter](https://avif.io/)
- [WebP Converter](https://developers.google.com/speed/webp/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

---

## ✅ Checklist Post-Migración

- [ ] Dependencias instaladas (`npm install`)
- [ ] `.env` configurado con Formspree ID
- [ ] GTM ID actualizado en `index.html`
- [ ] Hotjar ID actualizado en `index.html`
- [ ] Build exitoso (`npm run build`)
- [ ] Probado en localhost (`npm run dev`)
- [ ] Idiomas funcionan (ES ↔ EN)
- [ ] Analytics trackea eventos
- [ ] Imágenes AVIF generadas (opcional)
- [ ] Deploy a producción

---

## 🚀 Deploy

### Render/Heroku/Railway
```bash
# El proyecto ya está listo
# Solo configura las variables de entorno en el panel
PORT=3000
VITE_FORMSPREE_ID=tu_id
```

### Vercel/Netlify
```bash
# Build command
npm run build

# Output directory
dist

# Install command
npm install
```

---

¿Necesitas ayuda? Revisa `CHANGELOG_V2.md` para detalles completos de todas las features implementadas.
