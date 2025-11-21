# 🎬 Portfolio Audiovisual - Nahuel Granollers

Portfolio profesional de dirección audiovisual y técnico de realización, construido con tecnologías web modernas y optimizado para rendimiento y SEO.

> **🆕 Versión 2.0** - Ahora con internacionalización, analytics avanzado, imágenes AVIF y animaciones Framer Motion. [Ver changelog completo](CHANGELOG_V2.md)

## 🌟 Características

### Core Features
- ✨ **Diseño Moderno**: Interfaz elegante con efectos glassmorphism y animaciones suaves
- 🎥 **Galería de Videos**: Grid responsivo con preview en hover y lazy loading
- 🚀 **Alto Rendimiento**: Code splitting, lazy loading y optimizaciones de carga
- 📱 **Totalmente Responsivo**: Adaptado para móviles, tablets y escritorio
- ♿ **Accesibilidad**: ARIA labels, navegación por teclado y lectores de pantalla
- 🔍 **SEO Optimizado**: Schema.org, Open Graph, meta tags completos
- 🎨 **Efectos Visuales**: Cursor personalizado, partículas 3D con Three.js
- 📧 **Formulario de Contacto**: Integración con Formspree y validación completa
- 🛡️ **Seguridad**: Helmet para headers seguros y rate limiting
- 📦 **PWA**: Instalable como aplicación web progresiva

### 🆕 Nuevas en v2.0
- 🌍 **Internacionalización**: Español e Inglés con detección automática
- 📊 **Analytics Avanzado**: GTM + Hotjar + 15+ eventos personalizados
- 🎯 **Structured Data**: Schemas avanzados (VideoObject, Rating, BreadcrumbList)
- 🖼️ **Imágenes AVIF**: Formato next-gen con fallback WebP/JPG
- 🎬 **Framer Motion**: Animaciones profesionales 60fps
- 💾 **Service Worker**: Offline-first con background sync

## 🛠️ Tecnologías

### Frontend
- **React 19.2** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **Tailwind CSS** - Framework de utilidades CSS
- **Three.js** - Efectos 3D y visuales
- **Framer Motion** 🆕 - Animaciones fluidas
- **react-i18next** 🆕 - Internacionalización

### Backend
- **Express.js** - Servidor web
- **Helmet** - Seguridad HTTP headers
- **Express Rate Limit** - Protección contra DDoS

### DevOps & Herramientas
- **Vite PWA** - Progressive Web App
- **PostCSS & Autoprefixer** - Procesamiento CSS
- **Google Tag Manager** - Analytics
- **Hotjar** 🆕 - Heatmaps y session recordings
- **Formspree** - Manejo de formularios

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/NahuelGranollers/Portfolio.git
cd Portfolio

# Instalar dependencias
npm install

# Instalar dependencias de seguridad del servidor
npm install express-rate-limit helmet
```

## 🚀 Scripts Disponibles

```bash
# Desarrollo - Inicia el servidor de desarrollo
npm run dev

# Build - Construye la aplicación para producción
npm run build

# Preview - Previsualiza el build de producción
npm run preview

# Start - Inicia el servidor Express en producción
npm start

# Tailwind Watch - Observa cambios en CSS
npm run tailwind:watch

# Tailwind Build - Construye CSS para producción
npm run tailwind:build
```

## 📁 Estructura del Proyecto

```
portfolio/
├── components/          # Componentes React
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── ErrorBoundary.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Services.tsx
│   ├── VideoCard.tsx
│   ├── VideoGrid.tsx
│   ├── VideoThumbnail.tsx
│   ├── FullscreenPlayer.tsx
│   ├── BackgroundEffect.tsx
│   └── ParticlesCursor.tsx
├── hooks/              # Custom React hooks
│   ├── useInView.ts
│   └── useIntersectionObserver.ts
├── helpers/            # Funciones auxiliares
│   └── isMobile.ts
├── public/             # Archivos estáticos
│   ├── images/
│   └── videos/
├── App.tsx             # Componente principal
├── index.tsx           # Punto de entrada
├── index.html          # HTML base
├── constants.ts        # Configuración de contenido
├── types.ts            # Definiciones TypeScript
├── server.js           # Servidor Express
├── vite.config.ts      # Configuración Vite
├── tailwind.config.js  # Configuración Tailwind
└── package.json
```

## 🎨 Configuración de Contenido

### Agregar Nuevos Videos

Edita el archivo `constants.ts`:

```typescript
export const VIDEOS: Video[] = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    thumbnailUrl: '/videos/thumbnail.webp',
    videoUrl: '/videos/video.webm',
    year: '2025',
    role: 'Director & Editor',
    tools: ['Premiere Pro', 'After Effects'],
    category: 'Cinematografía',
    externalLink: 'https://example.com', // Opcional
    innovative: false // Badge especial opcional
  },
  // ... más videos
];
```

### Personalizar Información

Modifica `PERSONAL_INFO` en `constants.ts`:

```typescript
export const PERSONAL_INFO = {
  name: 'Tu Nombre',
  title: 'Tu Título',
  tagline: 'Tu eslogan',
  about: {
    intro: 'Introducción',
    experience: 'Experiencia',
    approach: 'Enfoque'
  },
  skills: ['Skill 1', 'Skill 2'],
  social: {
    email: 'tu@email.com',
    linkedin: 'https://linkedin.com/in/tu-perfil'
  }
};
```

### Servicios

Edita `SERVICES` en `constants.ts`:

```typescript
export const SERVICES = [
  {
    title: 'Tu Servicio',
    description: 'Descripción del servicio',
    icon: '🎬'
  },
  // ... más servicios
];
```

## 🔧 Variables de Entorno

Crea un archivo `.env` en la raíz:

```env
# Formspree ID para formulario de contacto
VITE_FORMSPREE_ID=tu_formspree_id

# Puerto del servidor (opcional)
PORT=3000
```

## 📱 PWA - Aplicación Web Progresiva

El portfolio es una PWA completamente funcional:
- Instalable en dispositivos
- Funciona offline (básico)
- Iconos y splash screens configurados
- Manifest incluido

## 🔒 Seguridad

- **Helmet**: Headers de seguridad HTTP
- **Rate Limiting**: 100 peticiones por IP cada 15 minutos
- **CSP**: Content Security Policy configurada
- **CORS**: Configuración segura de recursos

## 🎯 SEO y Analytics

### Schema.org
- Person markup
- LocalBusiness
- Service
- FAQPage
- WebPage

### Google Tag Manager
ID configurado: `GTM-KWZCJ3H8`

### Meta Tags
- Open Graph completo
- Twitter Cards
- Descripciones optimizadas
- Canonical URLs

## 🚀 Deploy

### Render, Vercel, o Netlify

```bash
# Build
npm run build

# La carpeta dist/ contiene los archivos estáticos
# El server.js sirve la aplicación en producción
```

### Variables de Entorno en Producción
- `PORT`: Puerto del servidor
- `VITE_FORMSPREE_ID`: ID de Formspree

## 📊 Performance

- **Lazy Loading**: Componentes y videos cargados bajo demanda
- **Code Splitting**: Chunks optimizados
- **Intersection Observer**: Carga de videos solo cuando son visibles
- **Image Optimization**: WebP para imágenes
- **Video Optimization**: WebM para videos

## 🐛 Troubleshooting

### Videos no cargan
- Verifica que los archivos estén en `public/videos/`
- Asegúrate de usar formato `.webm` o `.mp4`
- Revisa las rutas en `constants.ts` (deben empezar con `/`)

### Formulario no envía
- Configura tu ID de Formspree en `.env`
- Verifica la conexión a internet
- Revisa la consola del navegador

### Build falla
```bash
# Limpia node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

ISC License - ver archivo LICENSE para detalles

## 👤 Autor

**Nahuel Granollers**
- Website: [nahuelgranollers.com](https://nahuelgranollers.com)
- Email: nahuelgranollers@gmail.com
- LinkedIn: [@nahuelgranollers](https://www.linkedin.com/in/nahuelgranollers)
- GitHub: [@NahuelGranollers](https://github.com/NahuelGranollers)

## 🙏 Agradecimientos

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Three.js](https://threejs.org/)
- [Formspree](https://formspree.io/)

---

⭐ **Si te gustó este proyecto, dale una estrella en GitHub!**